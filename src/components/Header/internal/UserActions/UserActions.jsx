import React, { useContext } from 'react'

import api from '../../../../services'
import './UserActions.scss'
import ApplicationContext from '../../../../ApplicationContext'

export default function () {
  const { dispatch } = useContext(ApplicationContext)
  const handleLogout = () => {
    api.user.userLogout()
      .then(({ data: { success } }) => {
        if (success) {
          window.localStorage.clear('authToken')
          dispatch({ type: 'USER_LOGOUT' })
        }
      })
  }

  return (
    <ul className='c-userActions'>
      <li onClick={() => window.open(`${process.env.REACT_APP_QUIDOX_URL}`, '_self')} className='c-userActions__item'>Перейти в кабинет</li>
      <li onClick={handleLogout} className='c-userActions__item'>Выход</li>
    </ul>
  )
}
