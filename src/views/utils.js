const handleLoginWithSimECP = () => {
  const newPageUrl = `${process.env.REACT_APP_SIM_SCEP_URL}?`+
    `client_id=${process.env.REACT_APP_SIM_SCEP_CLIENT_ID}&`+
    `response_type=code&`+
    `state=1df12rt96cv12&`+
    `authentication=phone&`+
    `scope=sign&`+
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