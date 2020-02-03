import { footerIcons } from '../../resources'

const { fbIcon, vkIcon, twIcon, instIcon, shitIcon } = footerIcons

const socials = [
  {
    type: 'facebook',
    url: '#',
    icon: fbIcon
  },
  {
    type: 'vkontakte',
    url: '#',
    icon: vkIcon
  },
  {
    type: 'twitter',
    url: '#',
    icon: twIcon
  },
  {
    type: 'instagram',
    url: '#',
    icon: instIcon
  },
  {
    type: 'odnoklasniki',
    url: '#',
    icon: shitIcon
  }
]

const footerNav = [
  {
    title: 'Видеоуроки',
    route: '/video',
    position: 'left'
  },
  {
    title: 'Стоимость',
    route: '/services',
    position: 'left'
  },
  {
    title: 'Вопросы и ответы',
    route: '/faq',
    position: 'left'
  },
  {
    title: 'Контакты',
    route: '/contacts',
    position: 'right'
  },
  {
    title: 'Проверка подписи',
    route: '/esc',
    position: 'right'
  },
  {
    title: 'Правила пользования',
    route: '/terms',
    position: 'right'
  }
]

export {
  socials,
  footerNav
}
