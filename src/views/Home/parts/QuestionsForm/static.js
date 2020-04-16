const formItems = [
  {
    label: 'Имя',
    name: 'name',
    type: 'text',
    placeholder: 'Введите ваше имя',
    phoneRules: {
      addonBefore: null,
      mask: null
    },
    rules: {
      required: true,
      message: 'Обязательное поле'
    }
  },
  {
    label: 'Телефон',
    name: 'phone',
    type: 'phone',
    placeholder: 'Введите номер телефона',
    phoneRules: {
      addonBefore: '+375',
      mask: '11-111-11-11'
    },
    rules: {
      required: true,
      message: 'Обязательное поле',
      pattern: '^[-+\\/\\s]*([0-9][-+\\/\\s]*){9,}$'
    }
  }
]

export default formItems
