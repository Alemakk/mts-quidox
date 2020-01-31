import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import { Heading } from '../../components'

export default function Registration () {
  const { state } = useLocation()
  const [activeType, setActiveType] = useState('phone')

  const { type } = state

  useEffect(() => {
    if (type) {
      setActiveType(type)
    }
  }, [type])

  return (
    <div>
      <Heading level={2}>Тип регистрации {activeType}</Heading>
    </div>
  )
}
