const axios = require('axios')
const logger = require('firebase-functions/logger')
const ecomUtils = require('@ecomplus/utils')

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

  let docNumber = appData.datafrete_doc
  let token = appData.datafrete_token
  if (!docNumber || !token) {
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
  const checkZipCode = rule => {
    // validate rule zip range
    if (destinationZip && rule.zip_range) {
      const { min, max } = rule.zip_range
      return Boolean((!min || destinationZip >= min) && (!max || destinationZip <= max))
    }
    return true
  }

  let originZip, warehouseCode
  if (params.from) {
    originZip = params.from.zip
  } else if (Array.isArray(appData.warehouses) && appData.warehouses.length) {
    for (let i = 0; i < appData.warehouses.length; i++) {
      const warehouse = appData.warehouses[i]
      if (warehouse && warehouse.zip && checkZipCode(warehouse)) {
        const { code } = warehouse
        if (!code) {
          continue
        }
        if (
          params.items &&
          params.items.find(({ quantity, inventory }) => inventory && Object.keys(inventory).length && !(inventory[code] >= quantity))
        ) {
          // item not available on current warehouse
          continue
        }
        originZip = warehouse.zip
        if (warehouse.datafrete_doc) {
          docNumber = warehouse.datafrete_doc
        }
        if (warehouse.datafrete_token) {
          token = warehouse.datafrete_token
        }
        warehouseCode = code
      }
    }
  }
  if (!originZip) {
    originZip = appData.zip
  }
  originZip = typeof originZip === 'string' ? originZip.replace(/\D/g, '') : ''

  // search for configured free shipping rule
  if (Array.isArray(appData.free_shipping_rules)) {
    for (let i = 0; i < appData.free_shipping_rules.length; i++) {
      const rule = appData.free_shipping_rules[i]
      if (rule && checkZipCode(rule)) {
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
    const calcParams = {
      token,
      cepOrigem: originZip,
      cepDestino: destinationZip,
      infComp: {
        doc_empresa: docNumber,
        plataforma: 'ECOM'
      },

      produtos: params.items.map(item => {
        const { sku, name, quantity, dimensions, weight } = item
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
          preco: ecomUtils.price(item),
          qtd: quantity,
          volume: 0
        }
      })
    }

    return axios.post(
      appData.datafrete_endpoint || 'https://apresentacao.api.dev.datafreteapi.com',
      calcParams
    )
      .then(({ data, status }) => {
        let result
        if (typeof data === 'string') {
          try {
            result = JSON.parse(data)
          } catch (e) {
            logger.warn(`[calc] datafrete invalid json response "${data}"`, calcParams)
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
            const price = parseFloat(
              dfService.valor_frete_exibicao >= 0 && dfService.valor_frete_exibicao !== null
                ? dfService.valor_frete_exibicao
                : dfService.valor_frete
            )

            // push shipping service object to response
            response.shipping_services.push({
              label: dfService.nome_transportador || dfService.descricao,
              carrier: dfService.nome_transportador,
              carrier_doc_number: typeof dfService.cnpj_transportador === 'string'
                ? dfService.cnpj_transportador.replace(/\D/g, '').substr(0, 19)
                : undefined,
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
                warehouse_code: warehouseCode,
                flags: ['datafrete-ws', `datafrete-${serviceCode}`.substr(0, 20)]
              }
            })
          })
          res.send(response)
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
          logger.warn(`[calc] datafrete invalid res ${JSON.stringify(result)} for ${JSON.stringify(calcParams)}`)
          if (result && result.data) {
            // Datafrete error message
            return res.status(409).send({
              error: 'CALCULATE_FAILED',
              message: result.data
            })
          }
          message = `${message} (${response.status})`
        } else {
          logger.error(err)
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
