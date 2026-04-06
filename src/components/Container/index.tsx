import clsx from 'clsx'

export type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  const classes = clsx('w-full max-w-container mx-auto px-xsmall', className)

  return <div className={classes}>{children}</div>
}
