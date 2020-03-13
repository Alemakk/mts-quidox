import React from 'react'
import Slider from 'react-slick'

import { useWindowDimension } from '../../../../hooks'
import { Container, Button, Text, CarouselArrow, Heading } from '../../../../components'
import { ServicePackageContent, Package } from './styled'
import { images } from '../../../../resources'
import { servicePackages } from './static'

const { star } = images

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

export default function ServicePackage ({ theme: { theme } }) {
  const { width } = useWindowDimension()
  return (
    <ServicePackageContent className='section-with-slider'>
      <Container>
        <Heading
          brandText='Подключить'
          level={2}
        >
          пакет услуг
        </Heading>
      </Container>
      <Slider {...settings} style={{ marginTop: '5rem' }}>
        {servicePackages.map((i, idx) => {
          const sliderItemWidth = width * 0.4
          return (
            <Package className='slide-item' key={idx} style={{ width: sliderItemWidth }}>
              <Package.Header top={i.top} color={theme['@primary-color']}>
                {i.top &&
                <Package.Star src={star}>
                </Package.Star>}
                <Heading level={4} style={{ color: '#fff', marginBottom: 0 }}>{i.title}</Heading>
              </Package.Header>
              <Package.List>
                <Package.Item>
                  <Text small>Доступ по API</Text>
                  <Text small style={{ color: '#000' }}>{i.accessAPI ? 'Есть' : 'Нету'}</Text>
                </Package.Item>

                <Package.Item>
                  <Text small>Срок действия пакета</Text>
                  <Text small style={{ color: '#000' }}>{i.timePeriod}</Text>
                </Package.Item>

                <Package.Item>
                  <Text small>Количество пользователей компании</Text>
                  <Text small style={{ color: '#000' }}>{i.usersCount}</Text>
                </Package.Item>

                <Package.Item>
                  <Text small>Количество внутренних отправлений</Text>
                  <Text small style={{ color: '#000' }}>{i.amountInner}</Text>
                </Package.Item>

                <Package.Item>
                  <Text small>Количество внешних отправлений</Text>
                  <Text small style={{ color: '#000' }}>{i.amountOut}</Text>
                </Package.Item>

                <Package.Item>
                  <Text small>Количество входящих отправлений</Text>
                  <Text small style={{ color: '#000' }}>{i.amountIn}</Text>
                </Package.Item>

                <Package.Item>
                  <Text small>Объём рабочего дискового пространства</Text>
                  <Text small style={{ color: '#000' }}>{i.diskSpace}</Text>
                </Package.Item>
              </Package.List>

              <Button type='primary'>Подключить</Button>
            </Package>
          )
        })}
      </Slider>
    </ServicePackageContent>
  )
}
