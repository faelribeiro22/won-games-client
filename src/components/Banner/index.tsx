import clsx from 'clsx'
import Button from 'components/Button'
import Ribbon, { type RibbonColors, type RibbonSize } from 'components/Ribbon'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: string
  ribbonSize?: RibbonSize
  ribbonColor?: RibbonColors
  className?: string
}

const Banner = ({
  img,
  title,
  buttonLabel,
  buttonLink,
  subtitle,
  ribbon,
  ribbonSize = 'normal',
  ribbonColor = 'primary',
  className
}: BannerProps) => {
  const wrapperClasses = clsx(
    'relative',
    'lg:[&_.ribbon]:right-0 lg:[&_.ribbon]:before:hidden',
    'md:shadow-[0_0.4rem_0.5rem_0_rgba(0,0,0,0.2)]',
    className
  )

  return (
    <main className={wrapperClasses}>
      <div
        role="img"
        aria-label={title}
        className="w-full h-[23rem] bg-light-gray bg-center bg-cover md:h-[58rem]"
        style={{ backgroundImage: `url(${img})` }}
      />
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize} className="ribbon">
          {ribbon}
        </Ribbon>
      )}
      <div className="w-full bg-black/70 p-small md:rounded-b md:p-large md:absolute md:bottom-0 md:left-0">
        <h2 className="text-large font-bold text-white md:text-xxlarge">
          {title}
        </h2>
        <h3
          className="text-white text-small font-normal mb-xsmall [&_strong]:text-primary [&_strong]:font-bold md:text-large"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: This is a trusted content coming from the CMS
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </div>
    </main>
  )
}

export default Banner
