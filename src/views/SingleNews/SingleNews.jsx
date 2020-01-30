import React from "react"
import { useParams } from 'react-router-dom'

import { Container, Heading, Text } from '../../components'
import { useImage } from '../../hooks'
import news from './static'
import { News } from './styled'

export default function  SingleNews ({ theme: { theme } }) {
  const { id } = useParams()
  const selectedNews = news.find(e => e.id === Number(id))
  const { src } = useImage(selectedNews.banner)

  return (
    <News.Content>
      <News.Banner src={src}>
        <News.UselessLine color={theme['@primary-color']} />
        <Container>
          <Heading
            level={2}
            style={{ color: '#fff', textAlign: 'left' }}
          >
            {selectedNews.title}
          </Heading>
        </Container>
      </News.Banner>
    </News.Content>
  )
}
