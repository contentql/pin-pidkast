import React from 'react'

interface LockIconProps {
  className?: string
}

const LockIcon: React.FC<LockIconProps> = ({ className }) => {
  return (
    <svg
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width='14'
      height='14'>
      <path
        d='M4.5 6.5v-3a3 3 0 016 0V4m-8 2.5h10a1 1 0 011 1v6a1 1 0 01-1 1h-10a1 1 0 01-1-1v-6a1 1 0 011-1z'
        stroke='currentColor'
        strokeWidth='1.3px'></path>
    </svg>
  )
}

export default LockIcon
