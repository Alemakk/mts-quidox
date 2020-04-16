import http from './http'

function sendPhone (data) {
  return http({
    url: '/sms/send',
    method: 'POST',
    data
  })
}

function confirmSmsCode (data) {
  return http({
    url: '/sms/confirm',
    method: 'POST',
    data
  })
}

function createUser (data) {
  return http({
    url: '/register',
    method: 'POST',
    data
  })
}

function createUserByEmail (data) {
  return http({
    url: '/register/simple',
    method: 'POST',
    data
  })
}

function sendInvites (data) {
  return http({
    url: '',
    method: 'POST',
    data
  })
}

export {
  sendPhone,
  confirmSmsCode,
  createUser,
  createUserByEmail,
  sendInvites
}
