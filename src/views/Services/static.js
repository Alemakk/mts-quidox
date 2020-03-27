const servicePackages = [
  {
    id: 1,
    type: 'easy',
    title: 'Легкий',
    top: false,
    accessAPI: true,
    timePeriod: 30,
    usersCount: 4,
    amountInner: '∞',
    amountOut: 100,
    amountIn: '∞',
    diskSpace: 5
  },
  {
    title: 'Стандарт',
    type: 'standard',
    top: true,
    accessAPI: true,
    timePeriod: 30,
    usersCount: 4,
    amountInner: '∞',
    amountOut: 1000,
    amountIn: '∞',
    diskSpace: 5
  },
  {
    title: 'Бизнес',
    type: 'business',
    top: false,
    accessAPI: true,
    timePeriod: 30,
    usersCount: 4,
    amountInner: '∞',
    amountOut: 5000,
    amountIn: '∞',
    diskSpace: 5
  }
]

const serviceOptions = [
  'Доступ по API', 'Срок действия пакета', 'Количество пользователей компании',
  'Количество внутренних отправлений', 'Количество внешних отправлений',
  'Количество входящих отправлений', 'Объём рабочего дискового пространства'
]

export {
  servicePackages,
  serviceOptions
}
