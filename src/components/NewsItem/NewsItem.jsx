import React from 'react'

import { useImage } from '../../hooks'
import { Text } from '../'
import { NewsItemBlock } from './styled'

export default function NewsItem ({ text = '', path = '', ...rest }) {
  const { src } = useImage(path)

  return (
    <NewsItemBlock {...rest} image={src}>
      <Text style={{ textAlign: 'left', color: '#fff' }}>{text}</Text>
    </NewsItemBlock>
  )
}
