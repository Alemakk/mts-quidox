import http from './http'

function checkSign (data, config) {
  return http({
    url: '/sign/external/check',
    method: 'POST',
    data,
    ...config
  })
}

export {
  checkSign
}