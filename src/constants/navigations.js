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
    title: 'Пакеты услуг',
    route: '/services',
    exact: true,
    disabled: false,
    icon: PricesIcon
  },
  {
    title: 'Видеоуроки',
    route: '/video',
    exact: true,
    disabled: false,
    icon: VideoIcon
  },
  {
    title: 'Новости',
    route: '/news',
    exact: false,
    disabled: false,
    icon: NewsIcon
  },
  {
    title: 'Проверка подписи',
    route: '/esc-check',
    exact: true,
    disabled: false,
    icon: EscIcon
  }
]

const aside = [
  {
    title: 'Контакты',
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
    disabled: true,
    route: '/terms'
  }
]

export default {
  menu,
  aside
}
