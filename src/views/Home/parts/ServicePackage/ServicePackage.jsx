import React from 'react'
import Slider from 'react-slick'

import { useWindowDimension } from '../../../../hooks'
import { Container, Button, Text, CarouselArrow, Heading } from '../../../../components'
import { ServicePackageContent, Package } from './styled'
import { homeIcons } from '../../../../resources'
import { servicePackage } from './static'

const { star } = homeIcons

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

export default function ServicePackage ({ theme: { theme } }) {
  const { width } = useWindowDimension()
  return (
    <ServicePackageContent>
      <Heading
        brandText='Подключить'
        level={2}
      >
        пакет услуг
      </Heading>
      <Container>
        <Slider {...settings} style={{ marginTop: '10rem' }}>
          {servicePackage.map((i, idx) => (
            <Package className='slide-item' style={{ width: width > 1200 && 800 }} key={idx}>
              <Package.Header top={i.top} color={theme['@primary-color']}>
                {i.top &&
                  <Package.Star component={star}>
                  </Package.Star>}
                {i.title}
              </Package.Header>
              <Package.List>
                <Package.Item>
                  <Text>Доступ по API</Text>
                  <Text style={{ color: '#000' }}>{i.accessAPI ? 'Есть' : 'Нету'}</Text>
                </Package.Item>

                <Package.Item>
                  <Text>Срок действия пакета</Text>
                  <Text style={{ color: '#000' }}>{i.timePeriod}</Text>
                </Package.Item>

                <Package.Item>
                  <Text>Количество пользователей компании</Text>
                  <Text style={{ color: '#000' }}>{i.usersCount}</Text>
                </Package.Item>

                <Package.Item>
                  <Text>Количество внутренних отправлений</Text>
                  <Text style={{ color: '#000' }}>{i.amountInner}</Text>
                </Package.Item>

                <Package.Item>
                  <Text>Количество внешних отправлений</Text>
                  <Text style={{ color: '#000' }}>{i.amountOut}</Text>
                </Package.Item>

                <Package.Item>
                  <Text>Количество входящих отправлений</Text>
                  <Text style={{ color: '#000' }}>{i.amountIn}</Text>
                </Package.Item>

                <Package.Item>
                  <Text>Объём рабочего дискового пространства</Text>
                  <Text style={{ color: '#000' }}>{i.diskSpace}</Text>
                </Package.Item>
              </Package.List>

              <Button type='primary'>Подключить</Button>
            </Package>
          ))}
        </Slider>
      </Container>
    </ServicePackageContent>
  )
}
