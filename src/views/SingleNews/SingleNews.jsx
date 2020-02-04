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
      <News.ItemContent>
        <Container small>
          <Heading level={2}>Большой заголовок</Heading>

          <Text>LСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее
            осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в
            домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст
            генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст
            более привлекательным и живым.
          </Text>
          <Slider />
        </Container>
      </News.ItemContent>
    </News.Content>
  )
}
