import clsx from 'clsx'
import Button from 'components/Button'

export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  floatImage?: string
  buttonLabel: string
  buttonLink: string
  alignment?: 'left' | 'right'
  className?: string
}

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  buttonLabel,
  buttonLink,
  alignment = 'right',
  className
}: HighlightProps) => {
  const wrapperClasses = clsx(
    'relative bg-center bg-cover h-[23rem] grid md:h-[32rem]',
    'after:content-[""] after:absolute after:w-full after:h-full after:bg-black/60',
    {
      'grid-areas-[floatimage_content] grid-cols-[1.3fr_2fr]':
        alignment === 'right',
      'grid-areas-[content_floatimage] grid-cols-[2fr_1.3fr]':
        alignment === 'left'
    },
    className
  )

  const floatImageClasses = clsx(
    'z-base max-h-[23rem] max-w-full self-end md:max-h-[32rem]',
    '[grid-area:floatimage]',
    {
      'justify-self-end': alignment === 'left'
    }
  )

  const contentClasses = clsx(
    'z-base p-xsmall md:self-end md:p-large',
    '[grid-area:content]',
    {
      'text-right': alignment === 'right',
      'text-left': alignment === 'left'
    }
  )

  return (
    <section
      className={wrapperClasses}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {!!floatImage && (
        <img src={floatImage} alt={title} className={floatImageClasses} />
      )}
      <div className={contentClasses}>
        <h2 className="text-large font-bold text-white md:text-xxlarge">
          {title}
        </h2>
        <h3 className="text-small font-light text-white mb-medium md:text-large">
          {subtitle}
        </h3>
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </div>
    </section>
  )
}

export default Highlight
