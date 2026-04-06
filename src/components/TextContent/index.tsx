import clsx from 'clsx'
import Heading from 'components/Heading'

export type TextContentProps = {
  title?: string
  content: string
  className?: string
}

const TextContent = ({ title, content, className }: TextContentProps) => {
  const wrapperClasses = clsx(
    'text-white',
    'md:bg-white md:p-medium md:text-black',
    '[&_h1]:text-white [&_h1]:my-xsmall [&_h1]:pl-xxsmall [&_h1]:border-l-[0.7rem] [&_h1]:border-l-secondary',
    '[&_h2]:text-white [&_h2]:my-xsmall [&_h2]:pl-xxsmall [&_h2]:border-l-[0.7rem] [&_h2]:border-l-secondary',
    '[&_h3]:text-white [&_h3]:my-xsmall [&_h3]:pl-xxsmall [&_h3]:border-l-[0.7rem] [&_h3]:border-l-secondary',
    '[&_h4]:text-white [&_h4]:my-xsmall [&_h4]:pl-xxsmall [&_h4]:border-l-[0.7rem] [&_h4]:border-l-secondary',
    '[&_h5]:text-white [&_h5]:my-xsmall [&_h5]:pl-xxsmall [&_h5]:border-l-[0.7rem] [&_h5]:border-l-secondary',
    '[&_h6]:text-white [&_h6]:my-xsmall [&_h6]:pl-xxsmall [&_h6]:border-l-[0.7rem] [&_h6]:border-l-secondary',
    'md:[&_h1]:text-black md:[&_h2]:text-black md:[&_h3]:text-black md:[&_h4]:text-black md:[&_h5]:text-black md:[&_h6]:text-black',
    '[&_p]:mb-xsmall',
    '[&_a]:text-primary',
    '[&_img]:max-w-[min(70rem,100%)] [&_img]:mb-xsmall',
    '[&_ul]:p-xsmall [&_ul]:pl-small [&_ol]:p-xsmall [&_ol]:pl-small',
    '[&_hr]:my-small',
    className
  )

  return (
    <div className={wrapperClasses}>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default TextContent
