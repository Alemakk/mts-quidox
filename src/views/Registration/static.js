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
  },
  {
    type: 'id',
    steps: []
  },
  {
    type: 'usb',
    steps: []
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
    disabled: false
  },
  {
    name: 'USB ЭЦП',
    type: 'usb',
    disabled: false
  }
]

export {
  registrationSteps,
  registrationTypes
}
