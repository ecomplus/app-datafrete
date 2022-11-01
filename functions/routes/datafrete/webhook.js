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
  if (order.fulfillment_status && order.fulfillment_status.current === fulfillment.status) {
    return res.sendStatus(304)
  }
  try {
    if (invoices || trackingCodes) {
      let shippingLineId = fulfillment.shipping_line_id
      if (!shippingLineId) {
        for (let i = 0; i < order.shipping_lines.length; i++) {
          if (order.shipping_lines[i].flags && order.shipping_lines[i].flags.includes('datafrete-ws')) {
            shippingLineId = order.shipping_lines[i]._id
            break
          }
        }
      }
      await appSdk.apiRequest(
        storeId,
        `orders/${order._id}/shipping_lines/${(shippingLineId || '0')}.json`,
        'PATCH', {
          invoices,
          trackingCodes
        },
        auth
      )
      console.log('Shipping line updated')
    }
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
  }
}
