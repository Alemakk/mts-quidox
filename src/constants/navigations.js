import { menuIcons } from '../resources'
const { AboutIcon, PricesIcon, VideoIcon, NewsIcon, EscIcon } = menuIcons
const menu = [
  {
    title: 'О сервисе',
    route: '/about',
    disabled: true,
    icon: AboutIcon
  },
  {
    title: 'Стоимость',
    route: '/prices',
    disabled: true,
    icon: PricesIcon
  },
  {
    title: 'Видеоуроки',
    route: '/video',
    disabled: true,
    icon: VideoIcon
  },
  {
    title: 'Новости',
    route: '/news',
    disabled: true,
    icon: NewsIcon
  },
  {
    title: 'Проверка подписи',
    route: '/esc',
    disabled: true,
    icon: EscIcon
  }
]

const aside = [
  {
    title: 'Контакты',
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
