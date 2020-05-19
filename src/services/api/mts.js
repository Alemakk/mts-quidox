import http from './http'

function sendInvoice (data) {
  return http({
    url: 'mts/invoice/add',
    method: 'POST',
    data
  })
}

export {
  sendInvoice
}
