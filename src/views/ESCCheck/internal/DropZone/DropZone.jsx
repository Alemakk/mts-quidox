import React, { useState } from 'react'
import classNames from 'classnames'

import { Text, Button } from '../../../../components'
import './DropZone.scss'

export default function () {
  const [status, setStatus] = useState(false)
  const [isLoaded, setLoaded] = useState(false)

  const dropzoneClasses = classNames({
    dropzone: true,
    'dropzone--status-drag': status
  })

  const onDragEnter = e => {
    setStatus(true)
    e.preventDefault()
    e.stopPropagation()
  }

  const onDragLeave = e => {
    setStatus(false)
    e.preventDefault()
  }

  const onDrop = e => {
    console.log(e)
    setStatus(false)
    if (!status) {
      setLoaded(true)
    }
    const file = e.dataTransfer.files[0]
    console.log(file)
    e.preventDefault()
  }

  const doNothing = e => e.preventDefault()
  return (
    <div
      data-text='Бросьте файл сюда'
      className={dropzoneClasses}
      onDragEnter={onDragEnter}
      onDragOver={doNothing}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <Text bolder>Перетяните подписанный документ (.pdf/.doc/.zip файл)</Text>
      <Text>или</Text>
      <Button type='primary'>Выберите файл</Button>
    </div>
  )
}
