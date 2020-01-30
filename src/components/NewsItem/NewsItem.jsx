import React from 'react'

import history from '../../history'
import { useImage } from '../../hooks'
import { Text } from '../'
import { NewsItemBlock } from './styled'

export default function NewsItem ({ text = '', path = '', id = null, ...rest }) {
  const { src } = useImage(path)
  console.log(path);
  return (
    <NewsItemBlock
      src={src}
      onClick={() => history.push(`/news/${id}`)}
      {...rest}
    >
      <Text style={{ textAlign: 'left', color: '#fff' }}>{text}</Text>
    </NewsItemBlock>
  )
}
