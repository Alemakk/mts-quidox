import { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'

import ApplicationContext from '../../ApplicationContext'

export default function ({ hideAll }) {
  const { pathname } = useLocation()
  const { dispatch } = useContext(ApplicationContext)

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch({ type: 'SWITCH_ASIDE', payload: false })
  }, [pathname])

  return null
}
