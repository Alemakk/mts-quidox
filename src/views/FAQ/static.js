const faq = [
  {
    title: 'Как пройти регистрацию в сервисе?',
    text: 'По ссылке smartdoc.mts.by/registration можно пройти регистрацию по номеру телефона МТС или по e-mail.'
  },
  {
    title: 'Какой телефон указывать?',
    text: 'Ввод и подтверждение мобильного телефона необходимы для последующей аутентификации. Используйте зарегистрированный на юридическое лицо номер МТС, к которому имеете постоянный доступ. Если планируете использовать MTС ID - используйте при регистрации именно этот номер.'
  },
  {
    title: 'Мне выслали документы, но я не знаю, как их получить',
    text: 'Выясните, на какой e-mail отправлен документ. На данный адрес было направлено письмо от SmartDoc support – найдите его и следуйте инструкциям.  Если не нашли в почте письмо, то на странице входа smartdoc.mts.by/login нажмите кнопку “Забыли пароль?” и введите адрес электронной почты, куда должно было поступить письмо-приглашение. В письме будет ссылка на подтверждение личного кабинета, а также инструкции по дальнейшим шагам регистрации.'
  },
  {
    title: 'Я не получил письмо-приглашение. Как получить документ?',
    text: `Чтобы получить документ, на странице входа ${process.env.REACT_APP_BASE_URL}/login нажмите кнопку “Забыли пароль?” и введите адрес электронной почты, куда должно было поступить письмо-приглашение. В письме будет ссылка на подтверждение личного кабинета, а также инструкции по дальнейшим шагам регистрации.`
  },
  {
    title: 'Не могу войти в личный кабинет, чтобы получить документы',
    text: 'Убедитесь в том, что вводите именно тот адрес электронной почты, на который пришло письмо-приглашение. При вводе пароля, клавиша CapsLock не должна быть  активна.'
  },
  {
    title: 'Как изменить email, чтобы получать документы на другой адрес электронной почты?',
    text: 'Обратитесь к отправителю документов с просьбой заменить адрес электронной почты, на который Вы хотите получать электронные документы.'
  },
  {
    title: 'Я забыл (потерял) пароль, что делать?',
    text: `На странице входа ${process.env.REACT_APP_BASE_URL}/login необходимо нажать кнопку “Забыли пароль?” и ввести адрес электронной почты, на который зарегистрирован личный кабинет. Вам придет ссылка для ввода нового пароля.`
  },
  {
    title: 'Нужно ли устанавливать какую-то дополнительную программу для работы с сервисом?',
    text: 'Smartdoc.mts.by - это онлайн-сервис, который не требует установки дополнительного ПО. Для подписания документов электронной цифровой подписью понадобится программное обеспечение для ЭЦП от ГосСУОК или SIM-карта МТС ID.'
  },
  {
    title: 'Какой браузер необходим для работы в SmartDoc?',
    text: 'Получать документы как с ЭЦП, так и без, а также отправлять документы без ЭЦП вы можете в любом браузере. Подписание ЭЦП на USB носителе на данный момент возможно только в Internet Explorer. MTC ID возможно использовать в любом браузере.'
  },
  {
    title: 'Какие ключи ЭЦП можно использовать в SmartDoc?',
    text: 'Подписание документов в сервисе возможно с помощью функционала электронной цифровой подписи «МТС ID» или на USB-носителе с сертификатом ГосСУОК'
  },
  {
    title: 'Может ли получить документ незарегистрированный в сервисе контрагент или у которого нет ЭЦП?',
    text: 'Может. Если контрагент не зарегистрирован в сервисе, то отправить ему документ можно двумя способами:<br/>'+
    '1. На известный Вам e-mail контрагента. В таком случае система автоматически создаст для него личный кабинет и отправит письмо-приглашение для входа на указанный Вами e-mail.<br/>'+
    '2. Если e-mail контрагента Вам подлинно не известен, Вы можете оставить строку с адресом получателя пустой, а в поле ниже просто укажите его УНП. Контрагент сможет получить документ войдя в сервис по ЭЦП.'
  },
  {
    title: 'У меня нет ЭЦП, как получить документ?',
    text: 'Для получения документов ЭЦП не требуется. Просто войдите в сервис с помощью логина и пароля.'
  },
  {
    title: 'Скачиваю документ, а он без электронной подписи',
    text: 'Электронный документ представляет из себя ZIP-файл, который содержит в себе сам документ и файл-подпись с расширением .p7s к документу.'
  },
  {
    title: 'Почему в документе нет надписи про электронную подпись?',
    text: 'Подпись и документ находятся в одном файле архива, который и является электронным документом. Проверить ЭЦП документа и получить квитанцию о её подлинности можно с помощью функционала “Проверка ЭЦП”. Узнать историю документа, кем он подписан и когда можно в "Квитанции" сообщения – значок справа от сообщения (PDF).'
  },
  {
    title: 'Как убедиться, что проставленная на документе ЭЦП действительна?',
    text: 'Сервис автоматически проверяет действительность используемой ЭЦП при подписании каждого документа. Проверка осуществляется с учетом срока действия ЭЦП и отсутствия ее отзыва.'
  },{
    title: 'Что делать, если необходим бумажный вариант электронного документа?',
    text: 'Если необходимо отображение документа на бумаге, можно воспользоваться печатью документа и квитанции сообщения (значок справа от сообщения (PDF).'
  },
  {
    title: 'Имеют ли юридическую силу документы с ЭЦП?',
    text: 'Да. В соответствии с Законом Республики Беларусь от 28.12.2009 N 113-З «Об электронном документе и электронной цифровой подписи» электронные документы, подписанные ЭЦП, по юридической силе приравниваются к документам на бумаге, скрепленным подписями и печатями сторон.'
  },
  {
    title: 'Какие документы можно подписать в электронном виде?',
    text: 'Файлы любого формата могут быть подписаны в SmartDoc, начиная от документов в формате .doc и .pdf, до любых аудио- и видео- файлов, чертежей и т.д. (за исключением: товарно-транспортных, транспортных накладных; информации, содержащей государственные секреты; служебной информации ограниченного распространения; информации о частной жизни физического лица; персональных данных; иной информации, распространение и (или) предоставление которой ограничено).'
  },
  {
    title: 'Как хранить электронные документы? Необходимо ли их дублировать в бумажном виде?',
    text: "Вы самостоятельно решаете, как лучше хранить документы. SmartDoc предлагает два варианта (можно использовать оба варианта одновременно):<br/>"+
    "1. Локальное хранение, то есть скачивать документы с информацией о подписях и хранить на компьютере;<br/>" +
    "2. Облачное хранение в сервисе. Сохранение всех документов происходит автоматически."
  },
  {
    title: 'Как быть, если аудиторская или налоговая проверка требует представить оригинал документа на бумажном носителе?',
    text: 'Законом «Об электронном документе и электронной цифровой подписи» предусмотрена возможность сделать бумажное предствление электронного документа, то есть распечатать его, и заверить надлежащим образом.'
  },
  {
    title: 'Как подтвердить целостность документа?',
    text: 'Проверить электронный документ можно с помощью встроенного сервиса «Проверка ЭЦП».'
  },
  {
    title: 'Можно ли аннулировать или заменить электронный документ?',
    text: 'Заменить или аннулировать электронный документ можно путем составления и подписания соответствующего документа между контрагентами.'
  },
  {
    title: 'Что делать, если меняется ключ ЭЦП, например, истек его срок?',
    text: 'В работе сервиса ничего не меняется, вы будете использовать новый сертификат, который автоматически отобразится в сервисе. Просто выполните процедуру подключения новой ЭЦП.'
  }
]

export {
  faq
}
