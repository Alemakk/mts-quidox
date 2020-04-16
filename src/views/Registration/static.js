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
  },
  {
    type: 'email',
    steps: [
      {
        step: 'Способ регистрации'
      },
      {
        step: 'Почта'
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
    disabled: false
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
