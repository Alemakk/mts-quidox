import React, { useContext, useState, useEffect } from 'react'
import classNames from 'classnames'
import { useCountUp } from 'react-countup'

import LoadStatus from './styled'
import { ESCCheckContext } from '../../context'
import { Text, Button } from '../../../../components'
import './DropZone.scss'

export default function ({ type }) {
  const [status, setStatus] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const { countUp, start } = useCountUp({
    start: 0,
    end: 100,
    duration: Math.floor(1 + Math.random() * (5))
  })
  const { state, dispatch } = useContext(ESCCheckContext)

  useEffect(() => {
    if (countUp === 100) {
      setLoading(false)
    }
  }, [countUp])

  const dropzoneClasses = classNames({
    dropzone: true,
    'dropzone--dragged': status,
    'dropzone--loading': isLoading
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
    setStatus(false)
    setLoading(true)
    start()
    dispatch({ type: 'GET_FILE', payload: { type, file: e.dataTransfer.files[0] } })
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
      {isLoading && <LoadStatus width={countUp} />}
      {isLoading
        ? <>
          <div className='dropzone__text'>Загрузка...</div>
          <div className='dropzone__text dropzone__text--light'>{state[type].data.name}</div>
        </>
        : <>
          <div className='dropzone__text'>{state[type].defaultText}</div>
          <div className='dropzone__text dropzone__text--light'>или</div>
          <Button type='primary'>Выберите файл</Button>
        </>}
    </div>
  )
}
