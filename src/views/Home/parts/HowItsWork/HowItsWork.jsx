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
    nextArrow: <CarouselArrow />,
    prevArrow: <CarouselArrow direction='right' />,
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
          variableWidth: false,
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
              <Video.Text level={3} style={{ color: '#fff', textAlign: 'left', padding: '0 2rem' }}>{text}</Video.Text>
            </Video>
          ))}
        </Slider>
      </Container>
      <div style={{ textAlign: 'center' }}>
        <Button
          type='secondary'
          style={{ marginTop: '10rem' }}
          onClick={() => history.push('/video')}
          ghost
        >
          Другие видеоуроки
        </Button>
      </div>
    </HowItsWorkContent>
  )
}
