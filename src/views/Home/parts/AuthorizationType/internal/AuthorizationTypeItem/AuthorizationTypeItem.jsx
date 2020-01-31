import React from 'react'

import history from '../../../../../../history'
import { Text } from '../../../../../../components'
import { useImage } from '../../../../../../hooks'
import { AuthorizationItem } from './styled'

export default function AuthorizationTypeItem ({ data = null }) {
  const { image, text } = data
  const { src } = useImage(image)
  return (
    <AuthorizationItem onClick={() => history.push('/registration')}>
      <AuthorizationItem.Image src={src} />
      <Text style={{ color: '#000', fontWeight: 500 }}>{text}</Text>
    </AuthorizationItem>
  )
}
