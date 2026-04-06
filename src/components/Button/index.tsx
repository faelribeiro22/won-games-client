import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: JSX.Element
  as?: React.ElementType
  className?: string
} & ButtonTypes

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      icon,
      size = 'medium',
      fullWidth = false,
      minimal = false,
      className,
      as: Component = 'button',
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center cursor-pointer border-0 rounded no-underline transition-all duration-default'

    const sizeClasses = {
      small: 'h-12 text-xsmall px-xxsmall py-xxsmall',
      medium: 'h-16 text-small px-medium py-xxsmall',
      large: 'h-20 text-medium px-xlarge py-xxsmall'
    }

    const minimalClasses = minimal
      ? 'bg-transparent text-primary hover:text-primary/80'
      : 'bg-gradient-to-b from-[#ff5f5f] to-[#f062c0] text-white hover:from-[#e35565] hover:to-[#d958a6]'

    const iconClasses = icon ? '[&_svg]:w-6 [&_svg+span]:ml-xxsmall' : ''

    const classes = clsx(
      baseClasses,
      sizeClasses[size],
      minimalClasses,
      iconClasses,
      {
        'w-full': fullWidth
      },
      className
    )

    return (
      <Component ref={ref} className={classes} {...props}>
        {icon}
        {children && <span>{children}</span>}
      </Component>
    )
  }
)

Button.displayName = 'Button'

export default Button
