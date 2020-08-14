const axios = require('axios')

exports.post = ({ appSdk }, req, res) => {
  /**
   * Treat `params` and (optionally) `application` from request body to properly mount the `response`.
   * JSON Schema reference for Calculate Shipping module objects:
   * `params`: https://apx-mods.e-com.plus/api/v1/calculate_shipping/schema.json?store_id=100
   * `response`: https://apx-mods.e-com.plus/api/v1/calculate_shipping/response_schema.json?store_id=100
   */

  const { params, application } = req.body
  // setup basic required response object
  const response = {
    shipping_services: []
  }
  // merge all app options configured by merchant
  const appData = Object.assign({}, application.data, application.hidden_data)

  if (!appData.datafrete_doc || !appData.datafrete_token) {
    // must have configured Datafrete doc number and token
    return res.status(409).send({
      error: 'CALCULATE_AUTH_ERR',
      message: 'Token or document unset on app hidden data (merchant must configure the app)'
    })
  }

  if (appData.free_shipping_from_value >= 0) {
    response.free_shipping_from_value = appData.free_shipping_from_value
  }

  const destinationZip = params.to ? params.to.zip.replace(/\D/g, '') : ''
  const originZip = params.from ? params.from.zip.replace(/\D/g, '')
    : appData.zip ? appData.zip.replace(/\D/g, '') : ''

  const checkZipCode = rule => {
    // validate rule zip range
    if (destinationZip && rule.zip_range) {
      const { min, max } = rule.zip_range
      return Boolean((!min || destinationZip >= min) && (!max || destinationZip <= max))
    }
    return true
  }

  // search for configured free shipping rule
  if (Array.isArray(appData.free_shipping_rules)) {
    for (let i = 0; i < appData.free_shipping_rules.length; i++) {
      const rule = appData.free_shipping_rules[i]
      if (checkZipCode(rule)) {
        if (!rule.min_amount) {
          response.free_shipping_from_value = 0
          break
        } else if (!(response.free_shipping_from_value <= rule.min_amount)) {
          response.free_shipping_from_value = rule.min_amount
        }
      }
    }
  }

  if (!params.to) {
    // just a free shipping preview with no shipping address received
    // respond only with free shipping option
    res.send(response)
    return
  }

  /* DO THE STUFF HERE TO FILL RESPONSE OBJECT WITH SHIPPING SERVICES */

  if (!originZip) {
    // must have configured origin zip code to continue
    return res.status(409).send({
      error: 'CALCULATE_SKIP',
      message: 'Zip code is unset on app hidden data (merchant must configure the app)'
    })
  }

  if (params.items) {
    // send POST request to Datafrete REST API
    return axios.post(
      appData.datafrete_endpoint || 'https://apresentacao.api.dev.datafreteapi.com',
      {
        token: appData.datafrete_token,
        cepOrigem: originZip,
        cepDestino: destinationZip,
        infComp: {
          doc_empresa: appData.datafrete_doc,
          plataforma: 'ECOM'
        },

        produtos: params.items.map(({ sku, name, price, quantity, dimensions, weight }) => {
          // parse cart items to Datafrete schema
          let kgWeight = 0
          if (weight && weight.value) {
            switch (weight.unit) {
              case 'g':
                kgWeight = weight.value / 1000
                break
              case 'mg':
                kgWeight = weight.value / 1000000
                break
              default:
                kgWeight = weight.value
            }
          }
          const cmDimensions = {}
          if (dimensions) {
            for (const side in dimensions) {
              const dimension = dimensions[side]
              if (dimension && dimension.value) {
                switch (dimension.unit) {
                  case 'm':
                    cmDimensions[side] = dimension.value * 100
                    break
                  case 'mm':
                    cmDimensions[side] = dimension.value / 10
                    break
                  default:
                    cmDimensions[side] = dimension.value
                }
              }
            }
          }
          return {
            sku,
            descricao: name,
            altura: cmDimensions.height || 0,
            largura: cmDimensions.width || 0,
            comprimento: cmDimensions.length || 0,
            peso: kgWeight,
            preco: price,
            qtd: quantity,
            volume: 0
          }
        })
      }
    )

      .then(({ data, status }) => {
        let result
        if (typeof data === 'string') {
          try {
            result = JSON.parse(data)
          } catch (e) {
            return res.status(409).send({
              error: 'CALCULATE_INVALID_RES',
              message: data
            })
          }
        } else {
          result = data
        }

        if (result && Number(result.codigo_retorno) === 1 && Array.isArray(result.data)) {
          // success response
          result.data.forEach(dfService => {
            // parse to E-Com Plus shipping line object
            const serviceCode = String(dfService.cod_tabela)
            const price = parseFloat(dfService.valor_frete_exibicao || dfService.valor_frete)

            // push shipping service object to response
            response.shipping_services.push({
              label: dfService.descricao || dfService.nome_transportador,
              carrier: dfService.nome_transportador,
              carrier_doc_number: typeof dfService.cnpj_transportador === 'string'
                ? dfService.cnpj_transportador.replace(/\D/g, '').substr(0, 19) : undefined,
              service_name: `${(dfService.descricao || serviceCode)} (Datafrete)`,
              service_code: serviceCode,
              shipping_line: {
                from: {
                  ...params.from,
                  zip: originZip
                },
                to: params.to,
                price,
                total_price: price,
                discount: 0,
                delivery_time: {
                  days: parseInt(dfService.prazo_exibicao || dfService.prazo, 10),
                  working_days: true
                },
                posting_deadline: {
                  days: 3,
                  ...appData.posting_deadline
                },
                flags: ['datafrete-ws', `datafrete-${serviceCode}`.substr(0, 20)]
              }
            })
          })
        } else {
          // console.log(data)
          const err = new Error('Invalid Datafrete calculate response')
          err.response = { data, status }
          throw err
        }
      })

      .catch(err => {
        let { message, response } = err
        if (response && response.data) {
          // try to handle Datafrete error response
          const { data } = response
          let result
          if (typeof data === 'string') {
            try {
              result = JSON.parse(data)
            } catch (e) {
            }
          } else {
            result = data
          }
          if (result && result.data) {
            // Datafrete error message
            return res.status(409).send({
              error: 'CALCULATE_FAILED',
              message: result.data
            })
          }
          message = `${message} (${response.status})`
        }
        return res.status(409).send({
          error: 'CALCULATE_ERR',
          message
        })
      })
  } else {
    res.status(400).send({
      error: 'CALCULATE_EMPTY_CART',
      message: 'Cannot calculate shipping without cart items'
    })
  }

  res.send(response)
}
