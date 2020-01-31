import React from 'react'

import { Text } from '../../../../../../components'
import { useImage } from '../../../../../../hooks'
import { AuthorizationItem } from './styled'

export default function AuthorizationTypeItem ({ data = null }) {
  const { image, text, type } = data
  const { src } = useImage(image)
  return (
    <AuthorizationItem to={{ pathname: '/registration', state: { type: type } }}>
      <AuthorizationItem.Image src={src} />
      <Text style={{ color: '#000', fontWeight: 500 }}>{text}</Text>
    </AuthorizationItem>
  )
}
