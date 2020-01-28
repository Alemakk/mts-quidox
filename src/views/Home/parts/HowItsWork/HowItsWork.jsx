import React from 'react'
import Slider from 'react-slick'

import { CarouselArrow, Container, Heading, Text } from '../../../../components'
import { HowItsWorkContent, Video } from './styled'

const settings = {
  className: 'center',
  dots: true,
  arrows: true,
  centerMode: true,
  infinite: true,
  centerPadding: '70px',
  slidesToShow: 1,
  speed: 500,
  variableWidth: true,
  nextArrow: <CarouselArrow />,
  prevArrow: <CarouselArrow direction='right' />,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        variableWidth: false,
        arrows: false
      }
    }
  ]
}

const videoData = [
  {
    text: 'Как отправить документ MTC QuiDox?',
    url: 'https://youtu.be/dutlNDEhldE'
  },
  {
    text: 'Как отправить документ MTC QuiDox?',
    url: 'https://youtu.be/dutlNDEhldE'
  },
  {
    text: 'Как отправить документ MTC QuiDox?',
    url: 'https://youtu.be/dutlNDEhldE'
  }
]

export default function HowItsWork ({ theme: { theme } }) {
  return (
    <HowItsWorkContent>
      <Heading
        brandText='MTC Quidox?'
        brandPosition='right'
        style={{ textAlign: 'center' }}
      >
        Как работает
      </Heading>
      <Container style={{ textAlign: 'center' }}>
        <Text>
          Мы создали серию видеоуроков, чтобы помочь вам быстрее разобраться с <br /> сервисом, отправлять и получать документы с ЭЦП.
        </Text>
        <Slider {...settings}>
          {videoData.map(({ url, text }, idx) => (
            <Video
              key={idx}
              url={url}
              light
            />
          ))}
        </Slider>
      </Container>
    </HowItsWorkContent>
  )
}