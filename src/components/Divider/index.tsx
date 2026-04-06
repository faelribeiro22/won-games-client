import clsx from 'clsx'

export type DividerProps = {
  className?: string
}

export const Divider = ({ className }: DividerProps) => {
  const classes = clsx(
    'my-xxlarge mx-auto h-[0.1rem] bg-[rgba(181,181,181,0.3)] border-0',
    'md:my-[14rem]',
    className
  )

  return <hr className={classes} />
}
