import clsx from 'clsx'
import Banner, { BannerProps } from 'components/Banner'
import Slider, { SliderSettings } from 'components/Slider'

export type BannerSliderProps = {
  items: BannerProps[]
  className?: string
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items, className }: BannerSliderProps) => {
  const wrapperClasses = clsx(
    '[&_.slick-dots]:list-none [&_.slick-dots]:flex [&_.slick-dots]:items-center [&_.slick-dots]:justify-center [&_.slick-dots]:mt-small',
    '[&_.slick-dots_li]:bg-white [&_.slick-dots_li]:w-[1.2rem] [&_.slick-dots_li]:h-[1.2rem] [&_.slick-dots_li]:rounded-full [&_.slick-dots_li]:flex [&_.slick-dots_li]:items-center [&_.slick-dots_li]:justify-center [&_.slick-dots_li]:mx-xxsmall [&_.slick-dots_li]:cursor-pointer',
    '[&_.slick-dots_li.slick-active]:bg-primary',
    '[&_.slick-dots_button]:opacity-0 [&_.slick-dots_button]:w-[1.2rem] [&_.slick-dots_button]:h-[1.2rem] [&_.slick-dots_button]:cursor-pointer',
    'lg:[&>*]:max-w-[104rem] lg:[&>*]:mx-auto',
    'lg:[&_.slick-dots]:absolute lg:[&_.slick-dots]:right-0 lg:[&_.slick-dots]:flex-col lg:[&_.slick-dots]:h-full lg:[&_.slick-dots]:top-0 lg:[&_.slick-dots]:m-0',
    'lg:[&_.slick-dots_li]:my-xxsmall lg:[&_.slick-dots_li]:mx-0',
    className
  )

  return (
    <section className={wrapperClasses}>
      <Slider settings={settings}>
        {items.map((item) => (
          <Banner key={item.title} {...item} />
        ))}
      </Slider>
    </section>
  )
}

export default BannerSlider
