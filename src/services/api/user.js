import http from './http'

function userLogin (data) {
  return http({
    url: '/login',
    method: 'POST',
    data
  })
}

const userLogout = () => {
  return http({
    url: 'logout',
    method: 'POST'
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
  userLogout,
  getUser
}
