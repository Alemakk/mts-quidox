import http from './http'

function userLogin (data) {
  return http({
    url: '/login',
    method: 'POST',
    data
  })
}

function getUser () {
  return http({
    url: '/user',
    method: 'GET'
  })
}

export {
  userLogin,
  getUser
}
