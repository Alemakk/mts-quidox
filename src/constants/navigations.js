import { menuIcons } from '../resources'
const { AboutIcon, PricesIcon, VideoIcon, NewsIcon, EscIcon } = menuIcons
const menu = [
  {
    title: 'О сервисе',
    route: '/',
    exact: true,
    disabled: false,
    icon: AboutIcon
  },
  {
    title: 'Тарифы',
    route: '/services',
    disabled: false,
    icon: PricesIcon
  },
  {
    title: 'Видеоуроки',
    route: '/video',
    disabled: false,
    icon: VideoIcon
  },
  {
    title: 'Новости',
    route: '/news',
    disabled: false,
    icon: NewsIcon
  },
  {
    title: 'Проверка подписи',
    route: '/esc-check',
    disabled: false,
    icon: EscIcon
  }
]

const aside = [
  {
    title: 'Служба поддержки',
    disabled: false,
    route: '/contacts'
  },
  {
    title: 'Вопросы и ответы',
    disabled: false,
    route: '/faq'
  },
  {
    title: 'Правила пользования',
    disabled: false,
    route: '/terms'
  }
]

export default {
  menu,
  aside
}
