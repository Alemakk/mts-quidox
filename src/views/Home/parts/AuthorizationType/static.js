import { images } from '../../../../resources'

const { auth_id, auth_phone, auth_usb, auth_email } = images

const auth = [
  {
    text: 'Электронная почта',
    image: auth_email
  },
  {
    text: 'USB ЭЦП',
    image: auth_usb
  },
  {
    text: 'MTC ID',
    image: auth_id
  },
  {
    text: 'Номер телефона',
    image: auth_phone
  }
]

export {
  auth
}
