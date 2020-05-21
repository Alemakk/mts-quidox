import { images } from '../../../../resources'
const { register, sign, key, download } = images

const howItsWork = [
  {
    text: 'Зарегистрируйтесь',
    icon: register

  },
  {
    text: 'Вставьте ключ к ЭЦП <br /> в компьютер',
    icon: key
  },
  {
    text: 'Загрузите документы',
    icon: download
  },
  {
    text: 'Нажмите кнопку “Подписать”, <br /> затем “Отправить”',
    icon: sign
  }
]

export {
  howItsWork
}
