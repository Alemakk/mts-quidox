import { Base64 } from 'js-base64'

const handleLoginWithSimECP = () => {
  const newPageUrl = `${process.env.REACT_APP_SIM_SCEP_URL}?` +
    `client_id=${process.env.REACT_APP_SIM_SCEP_CLIENT_ID}&` +
    `response_type=code&` +
    `state=${Base64.encode(JSON.stringify({ 'co_brand_name': 'mts', 'user_id': 0 }))}&` +
    `authentication=phone&` +
    `scope=sign&` +
    `redirect_uri=${process.env.REACT_APP_SIM_SCEP_CALLBACK}`

  window.open(newPageUrl, '', 'width=800,height=600')
}

const handleLoginWithECP = () => {
  window.open(`${process.env.REACT_APP_QUIDOX_URL}/e-sign-login`, '_self')
}

export {
  handleLoginWithSimECP,
  handleLoginWithECP
}
