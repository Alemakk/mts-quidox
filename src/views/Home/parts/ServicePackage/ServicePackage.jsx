import React from 'react'
import Slider from 'react-slick'

import history from '../../../../history'
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

export default function ServicePackage ({ theme: { theme } }) {
  const { width } = useWindowDimension()
  return (
    <ServicePackageContent className='section-with-slider'>
      <Container>
        <Heading
          brandPosition='right'
          brandText='МТС SmartDoc'
          level={2}
        >
          Подключить услугу
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
                  <Text>Доступ по API</Text>
                  <Text style={{ color: '#000' }}>{i.accessAPI ? 'Есть' : 'Нету'}</Text>
                </Package.Item>

                <Package.Item>
                  <Text>Срок действия пакета</Text>
                  <Text style={{ color: '#000' }}>{i.timePeriod} дней</Text>
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
                  <Text style={{ color: '#000' }}>{i.diskSpace} ГБ</Text>
                </Package.Item>

                <Package.Item>
                  <Text>Стоимость пакета</Text>
                  <Text style={{ color: '#000' }}>{i.price} BYN</Text>
                </Package.Item>
              </Package.List>

              <Button onClick={() => history.push({ pathname: '/services', state: { type: i.type } })} type='primary'>Подключить</Button>
            </Package>
          )
        })}
      </Slider>
    </ServicePackageContent>
  )
}
