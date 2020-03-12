import React from 'react'
import Slider from 'react-slick'

import { useWindowDimension } from '../../../../hooks'
import { CarouselArrow, Container, Heading, Text } from '../../../../components'
import { quidoxProcess } from './static'
import { QuidoxProcessContent, QuidoxProcessItem } from './styled'

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

export default function QuidoxProcess () {
  const { width } = useWindowDimension()
  return (
    <QuidoxProcessContent>
      <div style={{ position: 'relative', zIndex: 5 }}>
        <Container>
          <Heading
            level={2}
            brandPosition='right'
            brandText='MTC Quidox'
          >
            Как работает
          </Heading>

          <Text>Мы создали серию видеоуроков, чтобы помочь вам быстрее разобраться с <br />
            сервисом, отправлять и получать документы с ЭЦП.
          </Text>

          <Slider {...settings}>
            {quidoxProcess.map(({ text, image }, idx) => {
              const slideItemWidth = (width * 0.3)
              return (
                <QuidoxProcessItem
                  key={idx}
                  className='slide-item slide-item--process'
                  style={{ width: slideItemWidth }}
                >
                  <QuidoxProcessItem.Image
                    slideItemHeight={slideItemWidth * 0.8}
                    src={image}
                  />
                  <Heading
                    className='slider-hidden-text'
                    style={{ color: '#000' }}
                    level={4}
                  >
                    {text}
                  </Heading>
                </QuidoxProcessItem>
              )
            })}
          </Slider>
        </Container>
      </div>
    </QuidoxProcessContent>
  )
}
