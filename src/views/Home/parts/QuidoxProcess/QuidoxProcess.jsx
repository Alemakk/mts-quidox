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

export default function QuidoxProcess () {
  const { width } = useWindowDimension()
  return (
    <QuidoxProcessContent>
      <div style={{ position: 'relative', zIndex: 5 }}>
        <Heading
          level={2}
          brandPosition='right'
          brandText='MTC Quidox'
        >
          Процессы
        </Heading>

        <Container style={{ textAlign: 'center' }}>
          <Text>Мы создали серию видеоуроков, чтобы помочь вам быстрее разобраться с <br />
            сервисом, отправлять и получать документы с ЭЦП.
          </Text>

          <Slider {...settings} style={{ marginTop: '10rem' }}>
            {quidoxProcess.map(({ text, icon }, idx) => (
              <QuidoxProcessItem
                key={idx}
                style={{ width: width > 1200 && 800 }}
                className='slide-item slide-item--process'
              >
                <QuidoxProcessItem.Icon small={width < 800 ? 1 : 0} component={icon} />
                <Text
                  className='slider-hidden-text'
                  style={{ color: '#000', marginTop: '5rem' }}
                >{text}
                </Text>
              </QuidoxProcessItem>
            ))}
          </Slider>
        </Container>
      </div>
    </QuidoxProcessContent>
  )
}
