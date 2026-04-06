import clsx from 'clsx'

export type FormWrapperProps = {
  children: React.ReactNode
  className?: string
}

export const FormWrapper = ({ children, className }: FormWrapperProps) => {
  const classes = clsx(
    '[&>*]:my-xxsmall [&_button]:mx-auto [&_button]:my-medium [&_button]:mb-xsmall',
    className
  )

  return <div className={classes}>{children}</div>
}

export type FormLinkProps = {
  children: React.ReactNode
  className?: string
}

export const FormLink = ({ children, className }: FormLinkProps) => {
  const classes = clsx(
    'text-small text-black text-center',
    '[&_a]:text-secondary [&_a]:no-underline [&_a]:border-b [&_a]:border-secondary [&_a]:transition-all [&_a]:duration-fast',
    '[&_a:hover]:text-[#2aa49d] [&_a:hover]:border-[#2aa49d]',
    className
  )

  return <div className={classes}>{children}</div>
}
