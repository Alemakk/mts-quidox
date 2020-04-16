import { images } from '../../../../resources'

const { auth_id, auth_phone, auth_usb, auth_email, d1, d2, d3 } = images

const auth = [
  {
    text: 'Электронная почта',
    type: 'email',
    image: auth_email,
    disabledImage: d1,
    disabled: false
  },
  {
    text: 'USB ЭЦП',
    type: 'usb',
    image: auth_usb,
    disabledImage: d2,
    disabled: false
  },
  {
    text: 'MTC ID',
    type: 'id',
    image: auth_id,
    disabledImage: d3,
    disabled: false
  },
  {
    text: 'Номер телефона',
    type: 'phone',
    image: auth_phone,
    disabled: false
  }
]

export {
  auth
}
