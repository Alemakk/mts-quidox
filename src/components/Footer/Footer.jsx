import React from 'react'
import {Icon} from '@ant-design/compatible'

import {Col, Row} from 'antd'
import {useWindowDimension} from '../../hooks'
import {Container, Text} from '../'
import {footerNav, socials} from './static'
import {ThemeFooter} from './styled'

export default function Footer({theme: {theme}}) {
    const {width} = useWindowDimension()

    return (
        <ThemeFooter>
            <Container>
                <Row type='flex' gutter={[24, 24]}>
                    <Col md={24} lg={8}>
                        <div>
                            <ThemeFooter.Socials style={{marginBottom: width < 1200 ? '2.5rem' : '10rem'}}>
                                {socials.map(({type, url, icon}, idx) => (
                                    <ThemeFooter.SocialsItem key={idx}>
                                        <ThemeFooter.SocialsItemLink href={url} alt={type}
                                                                     color={theme['@primary-color']} target='_blank'>
                                            <Icon component={icon}/>
                                        </ThemeFooter.SocialsItemLink>
                                    </ThemeFooter.SocialsItem>
                                ))}
                            </ThemeFooter.Socials>

                            <Text style={{color: '#fff', fontSize: '1.8rem', textAlign: 'left'}}>
                                © 2019-2020 СООО <a href='https://mts.by'>«Мобильные ТелеСистемы».</a> Все права
                                защищены.
                            </Text>
                        </div>
                    </Col>

                    <Col md={12} lg={5}>
                        <ThemeFooter.Nav>
                            {footerNav.filter(el => el.position === 'left')
                                .map(({title, route}, idx) => (
                                    <ThemeFooter.NavLink color={theme['@primary-color']}
                                                         activeStyle={{color: theme['@primary-color']}} key={idx}
                                                         to={route}>{title}</ThemeFooter.NavLink>
                                ))}
                        </ThemeFooter.Nav>
                    </Col>

                    <Col md={12} lg={5}>
                        <ThemeFooter.Nav>
                            {footerNav.filter(el => el.position === 'right')
                                .map(({title, route}, idx) => (
                                    <ThemeFooter.NavLink color={theme['@primary-color']}
                                                         activeStyle={{color: theme['@primary-color']}} key={idx}
                                                         to={route}>{title}</ThemeFooter.NavLink>
                                ))}
                        </ThemeFooter.Nav>
                    </Col>

                    <Col md={24} lg={6}>
                        <ThemeFooter.BottomBlock>
              <span>Powered by&nbsp;
                <a href='https://quidox.by'>QuiDox.by</a>
              </span>

                        </ThemeFooter.BottomBlock>
                    </Col>
                </Row>
            </Container>
        </ThemeFooter>
    )
}
