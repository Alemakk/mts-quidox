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
    title: 'Стоимость',
    route: '/prices',
    exact: true,
    disabled: true,
    icon: PricesIcon
  },
  {
    title: 'Видеоуроки',
    route: '/video',
    exact: true,
    disabled: true,
    icon: VideoIcon
  },
  {
    title: 'Новости',
    route: '/news',
    exact: true,
    disabled: false,
    icon: NewsIcon
  },
  {
    title: 'Проверка подписи',
    route: '/esc',
    exact: true,
    disabled: true,
    icon: EscIcon
  }
]

const aside = [
  {
    title: 'Контакты',
    exact: true,
    disabled: true,
    route: '/contacts'
  },
  {
    title: 'Вопросы и ответы',
    disabled: true,
    route: '/faq'
  },
  {
    title: 'Правила пользования',
    disabled: true,
    route: '/terms'
  }
]

export default {
  menu,
  aside
}
