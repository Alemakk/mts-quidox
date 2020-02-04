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
        <Container>
          <Heading
            level={2}
            brandPosition='right'
            brandText='MTC Quidox'
            style={{ marginBottom: '6.5rem' }}
          >
            Как работает
          </Heading>

          <Text>Мы создали серию видеоуроков, чтобы помочь вам быстрее разобраться с <br />
            сервисом, отправлять и получать документы с ЭЦП.
          </Text>

          <Slider {...settings} style={{ marginTop: '15rem' }}>
            {quidoxProcess.map(({ text, image }, idx) => (
              <QuidoxProcessItem
                key={idx}
                style={{ width: width > 1200 && 800 }}
                className='slide-item slide-item--process'
              >
                <QuidoxProcessItem.Image small={width < 800 ? 1 : 0} src={image} />
                <Text
                  className='slider-hidden-text'
                  style={{ color: '#000', margin: '15rem 0 8rem', fontSize: '3.6rem' }}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </QuidoxProcessItem>
            ))}
          </Slider>
        </Container>
      </div>
    </QuidoxProcessContent>
  )
}
