import React from 'react'
import Icon from '@ant-design/icons'

function file () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        fill='#808285'
        d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z'
      />
    </svg>
  )
}

function close () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        fill='#808285'
        stroke='#808285'
        strokeWidth='0.2'
        d='M18.038 7.558a.69.69 0 10-.975-.974l-4.753 4.753-4.75-4.75a.69.69 0 10-.975.974l4.75 4.75-4.752 4.753a.689.689 0 10.974.975l4.753-4.753 4.756 4.755a.69.69 0 00.974-.974l-4.755-4.756 4.753-4.753z'
        opacity='0.3'
      />
    </svg>
  )
}

const FileIcon = props => <Icon component={file} {...props} />
const CloseIcon = props => <Icon component={close} {...props} />

export {
  FileIcon,
  CloseIcon
}
