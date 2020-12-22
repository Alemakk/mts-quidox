import React from 'react'

import { VideoPlayer, Heading, Text } from '../../../../components'
import { Video } from './styled'
export default function VideoItem ({ data = null, direction }) {
  const { title, text, url, poster } = data
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
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </Video.Content>
    </Video>
  )
}
