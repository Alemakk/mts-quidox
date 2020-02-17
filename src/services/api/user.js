import http from './http'

function userLogin (data) {
  return http({
    url: '/login',
    method: 'POST',
    data
  })
}

export {
  userLogin
}
