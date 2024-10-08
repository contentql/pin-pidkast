import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils/cn'

const Button = ({
  onClick,
  children,
  className,
}: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button className={cn('btn btn-sm text-sm', className)} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
