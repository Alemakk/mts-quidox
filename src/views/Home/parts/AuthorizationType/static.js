import { images } from '../../../../resources'

const { auth_id, auth_phone, auth_usb, auth_email } = images

const auth = [
  {
    text: 'Электронная почта',
    type: 'email',
    image: auth_email
  },
  {
    text: 'USB ЭЦП',
    type: 'usb',
    image: auth_usb
  },
  {
    text: 'MTC ID',
    type: 'id',
    image: auth_id
  },
  {
    text: 'Номер телефона',
    type: 'phone',
    image: auth_phone
  }
]

export {
  auth
}
