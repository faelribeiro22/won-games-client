import clsx from 'clsx'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineBottom?: boolean
  lineLeft?: boolean
  lineColor?: LineColors
  size?: 'small' | 'medium' | 'huge'
  className?: string
}

const Heading = ({
  children,
  color = 'white',
  lineBottom = false,
  lineColor = 'primary',
  lineLeft = false,
  size = 'medium',
  className
}: HeadingProps) => {
  const colorClasses = {
    white: 'text-white',
    black: 'text-black'
  }

  const sizeClasses = {
    small: 'text-medium after:w-12',
    medium: 'text-xlarge md:text-xxlarge',
    huge: 'text-huge'
  }

  const borderLeftColorClasses = {
    primary: 'border-l-primary',
    secondary: 'border-l-secondary'
  }

  const afterBorderColorClasses = {
    primary: 'after:border-b-primary',
    secondary: 'after:border-b-secondary'
  }

  const classes = clsx(
    colorClasses[color],
    sizeClasses[size],
    {
      'pl-xxsmall border-l-[0.7rem]': lineLeft,
      'relative mb-medium after:content-[""] after:absolute after:left-0 after:bottom-[-1rem] after:w-20 after:border-b-[0.5rem]':
        lineBottom
    },
    lineLeft && borderLeftColorClasses[lineColor],
    lineBottom && afterBorderColorClasses[lineColor],
    className
  )

  return <h2 className={classes}>{children}</h2>
}

export default Heading
