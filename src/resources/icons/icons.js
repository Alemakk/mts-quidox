import React from 'react'
import Icon from '@ant-design/icons'

function successIcon () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        fill='#219653'
        d='M12 0C5.384 0 0 5.384 0 12s5.384 12 12 12 12-5.384 12-12S18.616 0 12 0z'
      />
      <path
        fill='#fff'
        d='M16.605 8.01l-6.195 5.902-2.951-3.048c-.39-.39-1.005-.39-1.362-.033-.39.39-.39 1.006-.033 1.363l3.633 3.73a.989.989 0 00.68.291c.228 0 .487-.097.682-.26l6.908-6.55A.94.94 0 0018 8.041a1.01 1.01 0 00-1.395-.032z'
      />
    </svg>
  )
}

const SuccessIcon = props => <Icon component={successIcon} {...props} />

export default {
  SuccessIcon
}
