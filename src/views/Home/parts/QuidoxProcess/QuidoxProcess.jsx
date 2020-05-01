import React from 'react'
import Slider from 'react-slick'

import { useWindowDimension } from '../../../../hooks'
import { CarouselArrow, Container, Heading, Text } from '../../../../components'
import { quidoxProcess } from './static'
import { QuidoxProcessContent, QuidoxProcessItem } from './styled'

const settings = {
  className: 'slider-quidox-process',
  dots: true,
  arrows: true,
  centerMode: true,
  infinite: true,
  centerPadding: '70px',
  slidesToShow: 1,
  speed: 500,
  variableWidth: true,
  nextArrow: <CarouselArrow direction='right' />,
  prevArrow: <CarouselArrow />,
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

export default function () {
  const { width } = useWindowDimension()
  return (
    <QuidoxProcessContent className='section-with-slider'>
      <div style={{ position: 'relative', zIndex: 5 }}>
        <Container>
          <Heading
            level={2}
            brandPosition='right'
            brandText='MTC SmartDoc'
          >
            Преимущества
          </Heading>

        </Container>
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

                <Text bolder style={{ marginTop: '3rem' }}>{text}</Text>
              </QuidoxProcessItem>
            )
          })}
        </Slider>
      </div>
    </QuidoxProcessContent>
  )
}
