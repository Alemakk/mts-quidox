const formItems = [
  {
    label: 'Введите адрес электронной почты',
    name: 'email',
    type: 'email',
    placeholder: 'Введите адрес электронной почты',
    rules: [
      {
        type: 'email',
        message: 'The input is not valid E-mail!',
      },
      {
        required: true,
        message: 'Please input your E-mail!',
      }
    ]
  },
  {
    label: 'Введите пароль',
    name: 'password',
    type: 'password',
    placeholder: 'Введите номер телефона',
    rules: [
      {
        required: true,
        message: 'Please input your password!',
      }
    ]
  },
  {
    label: 'Запомнить меня',
    name: 'remember',
    type: 'checkbox',
    placeholder: null,
    rules: []
  }
]

export default formItems
