import clsx from 'clsx'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSize = 'normal' | 'small'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSize
  className?: string
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal',
  className
}: RibbonProps) => {
  const colorClasses = {
    primary: 'bg-primary before:border-l-[#c2277e] before:border-t-[#c2277e]',
    secondary:
      'bg-secondary before:border-l-[#2aa49d] before:border-t-[#2aa49d]'
  }

  const sizeClasses = {
    normal:
      'text-small px-small h-[3.6rem] right-[-2rem] before:top-[3.6rem] before:border-t-[1rem] before:border-r-[2rem]',
    small:
      'text-xsmall px-xsmall h-[2.6rem] right-[-1.5rem] before:top-[2.6rem] before:border-t-[0.7rem] before:border-r-[1.5rem]'
  }

  const classes = clsx(
    'absolute top-xsmall flex items-center font-bold text-white',
    'before:content-[""] before:absolute before:right-0 before:border-solid before:border-l-0 before:border-r-transparent before:border-b-transparent before:border-b-[1rem]',
    colorClasses[color],
    sizeClasses[size],
    className
  )

  return <div className={classes}>{children}</div>
}

export default Ribbon
