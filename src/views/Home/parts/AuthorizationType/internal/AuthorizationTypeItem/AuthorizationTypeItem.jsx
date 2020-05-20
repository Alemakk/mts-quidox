import React from 'react'

import history from '../../../../../../history'
import { handleLoginWithSimECP, handleLoginWithECP } from '../../../../../utils'
import { Text } from '../../../../../../components'
import { useImage } from '../../../../../../hooks'
import { AuthorizationItem } from './styled'

export default function AuthorizationTypeItem ({ data = null }) {
  const { image, text, type, disabled, disabledImage } = data
  const { src } = useImage(disabled ? disabledImage : image)
  return (
    <AuthorizationItem onClick={() => ['id', 'usb'].includes(type) ? (type === 'id' ? handleLoginWithECP() : handleLoginWithSimECP()) : history.push('/login')} className={disabled && 'disabled'} disabled={disabled}>
      <AuthorizationItem.Image src={src} />
      {disabled && <span style={{ textAlign: 'center', color: 'rgb(227, 6, 17)', display: 'block', fontWeight: 700 }}>Скоро!</span>}
      <Text style={{ color: disabled ? '#BCBEC0' : '#000', fontWeight: 500 }}>{text}</Text>
    </AuthorizationItem>
  )
}
