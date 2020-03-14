import React from 'react'
import ReactPlayer from 'react-player'
import { Icon } from '@ant-design/compatible'
import { player } from '../../resources'

export default function VideoPlayer (props) {
  const {
    theme: { theme },
    ...rest
  } = props
  return (
    <ReactPlayer
      width='100%'
      height='100%'
      playIcon={<Icon component={player} style={{ color: theme['@primary-color'] }} />}
      controls
      {...rest}
    />
  )
}
