import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export default function ({ hideAll }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    hideAll()
  }, [pathname])

  return null
}
