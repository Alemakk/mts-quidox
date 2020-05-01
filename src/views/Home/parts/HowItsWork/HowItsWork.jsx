import React, { useState } from 'react'
import Slider from 'react-slick'

import history from '../../../../history'
import { useWindowDimension } from '../../../../hooks'
import { CarouselArrow, VideoPlayer, Container, Heading, Text, Button } from '../../../../components'
import videoData from './static'
import { HowItsWorkContent, Video } from './styled'

export default function HowItsWork ({ theme: { theme } }) {
  const { width } = useWindowDimension()
  const [pause, setPause] = useState(1)

  const settings = {
    className: 'center',
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: '70px',
    speed: 500,
    variableWidth: true,
    nextArrow: <CarouselArrow direction='right'  />,
    prevArrow: <CarouselArrow />,
    afterChange: (current) => setPause(current),
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
          arrows: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false
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
      />
      <Container style={{ textAlign: 'center' }}>
        <Text>
          Мы создали серию видеоуроков, чтобы помочь вам быстрее разобраться с <br /> сервисом, отправлять и получать документы с ЭЦП.
        </Text>
      </Container>
      <Slider {...settings} style={{ marginTop: '5rem' }}>
        {videoData.map(({ url, text, poster }, idx) => {
          const slideItemWidth = (width * 0.5)
          const slideItemHeight = slideItemWidth * 0.6
          return (
            <Video
              key={idx}
              style={{ width: slideItemWidth }}
              className='slide-item'
              videoHeight={slideItemHeight}
            >
              <VideoPlayer
                url={url}
                light={poster}
                playing={pause === idx}
              />

              <Video.Description>
                <Text white>{text}</Text>
              </Video.Description>
            </Video>
          )
        })}
      </Slider>
      <div style={{ textAlign: 'center' }}>
        <Button
          type='secondary'
          style={{ marginTop: '7rem' }}
          onClick={() => history.push('/video')}
          ghost
        >
          Другие видеоуроки
        </Button>
      </div>
    </HowItsWorkContent>
  )
}
