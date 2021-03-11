import React from 'react'
import Slider from 'react-slick'
import { useParams } from 'react-router-dom'

import { Container, Heading, Text } from '../../components'
import { useImage } from '../../hooks'
import { news } from './static'
import { News } from './styled'

export default function SingleNews ({ theme: { theme } }) {
  const { id } = useParams()
  const selectedNews = news.find(e => e.id === Number(id))
  const { src } = useImage(selectedNews.banner)

  return (
    <News.Content>
        <News.Banner src={src}>
          <News.UselessLine color={theme['@primary-color']}/>
          <Container>
            <Heading
              level={1}
              style={{ color: '#fff', textAlign: 'left' }}
            >
              {selectedNews.title}
            </Heading>
          </Container>
        </News.Banner>

      <News.ItemContent>
        <Container small>
          {/*<Heading level={2}>Большой заголовок</Heading>*/}
          <Text dangerouslySetInnerHTML={{ __html: selectedNews.text }}>
          </Text>
          {/*<Slider/>*/}
        </Container>
      </News.ItemContent>
    </News.Content>
  )
}
