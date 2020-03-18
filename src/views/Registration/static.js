const registrationSteps = [
  {
    type: 'phone',
    steps: [
      {
        step: 'Способ регистрации'
      },
      {
        step: 'Номер телефона'
      },
      {
        step: 'Код'
      },
      {
        step: 'Почта и пароль'
      }
    ]
  }
]

const registrationTypes = [
  {
    name: 'Номер телефона',
    type: 'phone',
    disabled: false
  },
  {
    name: 'Электронная почта',
    type: 'email',
    disabled: true
  },
  {
    name: 'МТС ID',
    type: 'id',
    disabled: true
  },
  {
    name: 'USB ЭЦП',
    type: 'usb',
    disabled: true
  }
]

export {
  registrationSteps,
  registrationTypes
}
