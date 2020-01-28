import React, { useState } from 'react'
import Slider from 'react-slick'

import { useWindowDimension } from '../../../../hooks'
import { CarouselArrow, Container, Heading, Text } from '../../../../components'
import { HowItsWorkContent, Video } from './styled'

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
  const { width } = useWindowDimension()
  const [pause, setPause] = useState(1)

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
    afterChange: (current) => setPause(current),
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
        <Slider {...settings} style={{ marginTop: '10rem' }}>
          {videoData.map(({ url, text }, idx) => (
            <Video
              key={idx}
              style={{ width: width > 1200 && 800 }}
              className='slide-item'
            >
              <Video.Slide
                width='100%'
                height='100%'
                url={url}
                playing={pause === idx}
                light
              />
              <Video.Text style={{ color: '#fff' }}>{text}</Video.Text>
            </Video>
          ))}
        </Slider>
      </Container>
    </HowItsWorkContent>
  )
}