import React, { useState } from 'react'

import { useWindowDimension } from '../../../../hooks'
import { VideoPlayer, Heading, Text } from '../../../../components'
import { Video } from './styled'
export default function VideoItem ({ data = null, direction }) {
  const { title, text, url, poster } = data
  const { width } = useWindowDimension()
  return (
    <Video direction={direction}>
      <Video.Player>
        <VideoPlayer
          url={url}
          light={poster}
          playing
        />
      </Video.Player>

      <Video.Content>
        <Heading level={3}>{title}</Heading>
        <Text>{text}</Text>
      </Video.Content>
    </Video>
  )
}
