import clsx from 'clsx'

export type GridProps = {
  children: React.ReactNode
  className?: string
}

export const Grid = ({ children, className }: GridProps) => {
  const classes = clsx('grid grid-cols-main gap-medium my-medium', className)

  return <div className={classes}>{children}</div>
}
