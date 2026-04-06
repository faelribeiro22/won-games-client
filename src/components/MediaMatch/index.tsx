import clsx from 'clsx'

export type MediaMatchProps = {
  lessThan?: 'small' | 'medium' | 'large' | 'huge'
  greaterThan?: 'small' | 'medium' | 'large' | 'huge'
  children: React.ReactNode
  className?: string
}

const MediaMatch = ({
  lessThan,
  greaterThan,
  children,
  className
}: MediaMatchProps) => {
  const breakpointClasses = {
    lessThan: {
      small: 'block sm:hidden',
      medium: 'block md:hidden',
      large: 'block lg:hidden',
      huge: 'block xl:hidden'
    },
    greaterThan: {
      small: 'hidden sm:block',
      medium: 'hidden md:block',
      large: 'hidden lg:block',
      huge: 'hidden xl:block'
    }
  }

  const classes = clsx(
    'hidden',
    {
      [breakpointClasses.lessThan[lessThan!]]: !!lessThan,
      [breakpointClasses.greaterThan[greaterThan!]]: !!greaterThan
    },
    className
  )

  return <div className={classes}>{children}</div>
}

export default MediaMatch
