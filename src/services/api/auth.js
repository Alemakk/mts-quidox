import http from './http'

function sendPhone (data) {
  return http({
    url: `${process.env.REACT_APP_MTS_URL}/sms/send`,
    method: 'POST',
    data
  })
}

function confirmSmsCode (data) {
  return http({
    url: `${process.env.REACT_APP_MTS_URL}/sms/confirm`,
    method: 'POST',
    data
  })
}

function createUser (data) {
  return http({
    url: `${process.env.REACT_APP_MTS_URL}/register`,
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
