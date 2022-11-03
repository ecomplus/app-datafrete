const { operatorToken } = require('../../__env')

// const datafreteServerIps = []

exports.post = async ({ appSdk }, req, res) => {
  if (operatorToken !== req.get('x-operator-token')) {
    return res.sendStatus(401)
  }
  /*
  const clientIp = req.get('x-forwarded-for') || req.connection.remoteAddress
  if (datafreteServerIps.indexOf(clientIp) === -1) {
    return res.status(403).send('Who are you? Unauthorized IP address')
  }
  */
  const {
    store_id: storeId,
    order_update: {
      number,
      fulfillment,
      invoices,
      tracking_codes: trackingCodes
    }
  } = req.body
  if (!storeId || !number || !fulfillment || !fulfillment.status) {
    return res.sendStatus(400)
  }
  console.log('> Webhook #', storeId, number)
  const auth = await appSdk.getAuth(storeId)
  const endpoint = `orders.json?number=${number}` +
    '&fields=_id,fulfillment_status,shipping_lines&limit=1'
  const { response } = await appSdk.apiRequest(storeId, endpoint, 'GET', null, auth)
  const order = response.data.result[0]
  if (!order) {
    return res.sendStatus(404)
  }
  let shippingLineId = fulfillment.shipping_line_id
  let shippingLine
  if (order.shipping_lines) {
    if (!shippingLineId) {
      for (let i = 0; i < order.shipping_lines.length; i++) {
        if (order.shipping_lines[i].flags && order.shipping_lines[i].flags.includes('datafrete-ws')) {
          shippingLine = order.shipping_lines[i]
          shippingLineId = shippingLine._id
          break
        }
      }
    } else {
      shippingLine = order.shipping_lines.find(({ _id }) => _id === shippingLineId)
    }
    if (!shippingLine) {
      shippingLine = order.shipping_lines[0]
    }
  }
  const isShippingLineUpdate = shippingLine &&
    ((invoices && invoices.length) || (trackingCodes && trackingCodes.length))
  if (order.fulfillment_status && order.fulfillment_status.current === fulfillment.status) {
    if (!isShippingLineUpdate) {
      console.log('> Nothing to change on shipping line:', shippingLineId, order._id)
      return res.sendStatus(304)
    }
    res.sendStatus(200)
  } else {
    try {
      const { response: { status } } = await appSdk.apiRequest(
        storeId,
        `orders/${order._id}/fulfillments.json`,
        'POST',
        fulfillment,
        auth
      )
      res.sendStatus(status)
    } catch (error) {
      console.error(error)
      if (error.response && error.response.status) {
        res.status(error.response.status)
        res.send(error.response.data)
      } else {
        res.sendStatus(500)
      }
      return
    }
  }
  if (isShippingLineUpdate) {
    console.log('> Updating shipping line:', shippingLineId, order._id)
    try {
      await appSdk.apiRequest(
        storeId,
        `orders/${order._id}/shipping_lines/${(shippingLineId || '0')}.json`,
        'PATCH',
        { invoices, tracking_codes: trackingCodes },
        auth
      )
      console.log('Shipping line invoices/tracking updated')
    } catch (error) {
      if (error.response) {
        let { message } = error
        if (error.response.data) {
          if (typeof error.response.data === 'object') {
            message += '\n' + JSON.stringify(error.response.data)
          } else {
            message += '\n' + error.response.data
          }
        }
        if (error.config && error.config.url) {
          message += '\n' + error.config.url
        }
        console.error(new Error(message))
      } else {
        console.error(error)
      }
    }
  }
}
