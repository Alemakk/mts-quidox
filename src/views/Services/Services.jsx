import React from 'react'

import { Container, Heading, Button } from '../../components'
import { ServicesContent } from './styled'

import { servicePackages, serviceOptions } from './static'
import './Services.scss'

export default function () {
  return (
    <ServicesContent>
      <Container>
        <Heading brandText='Пакеты'>услуг</Heading>

        <div className='services'>
          <ul className='services__item list list--description'>
            <li className='list__item list__item--head list__item--transparent' />
            {serviceOptions.map((i, idx) => <li className='list__item' key={idx}>{i}</li>)}
            <Button style={{ marginLeft: '2rem' }} type='secondary' ghost>Подробднее</Button>
          </ul>
          {servicePackages.map((i, idx) => (
            <ul className={`services__item list ${i.top ? 'list--top' : ''}`} key={idx}>
              <li className='list__item list__item--head'>{i.title}</li>
              <li className='list__item'>{i.accessAPI && 'есть'}</li>
              <li className='list__item'>{i.timePeriod}</li>
              <li className='list__item'>{i.usersCount}</li>
              <li className='list__item'>{i.amountInner}</li>
              <li className='list__item'>{i.amountOut}</li>
              <li className='list__item'>{i.amountIn}</li>
              <li className='list__item'>{i.diskSpace}GB</li>
              <Button type='primary'>Подключить</Button>
            </ul>
          ))}
        </div>
      </Container>
    </ServicesContent>
  )
}
