import React, { useState } from 'react'
import Slider from 'react-slick'
import YouTube from 'react-youtube'

import history from '../../../../history'
import { useWindowDimension } from '../../../../hooks'
import { CarouselArrow, VideoPlayer, Container, Heading, Text, Button } from '../../../../components'
import videoData from './static'
import { HowItsWorkContent, Video } from './styled'
import ReactPlayer from 'react-player'

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
        level={2}
        brandText='Видеоуроки'
        brandPosition='right'
        style={{ marginBottom: '7.5rem' }}
      />
      <Container style={{ textAlign: 'center' }}>
        <Text>
          Мы создали серию видеоуроков, чтобы помочь вам быстрее разобраться с <br /> сервисом, отправлять и получать документы с ЭЦП.
        </Text>

        <Slider {...settings} style={{ marginTop: '5rem' }}>
          {videoData.map(({ url, text, poster }, idx) => (
            <Video
              key={idx}
              style={{ width: width > 1200 && 900 }}
              className='slide-item'
            >
              <VideoPlayer
                url={url}
                light={poster}
                playing={pause === idx}
              />
              <Video.Text level={3} style={{ color: '#fff', textAlign: 'left' }}>{text}</Video.Text>
            </Video>
          ))}
        </Slider>
        <Button
          type='secondary'
          style={{ marginTop: '10rem' }}
          onClick={() => history.push('/video')}
          ghost
        >
          Другие видеоуроки
        </Button>
      </Container>
    </HowItsWorkContent>
  )
}
