import { forwardRef } from 'react'
import SlickSlider, { Settings } from 'react-slick'
import clsx from 'clsx'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
  className?: string
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings, className },
  ref
) => {
  const wrapperClasses = clsx(
    '[&_.slick-slider]:relative [&_.slick-slider]:block [&_.slick-slider]:box-border [&_.slick-slider]:select-none [&_.slick-slider]:touch-pan-y [&_.slick-slider]:[-webkit-tap-highlight-color:transparent]',
    '[&_.slick-list]:relative [&_.slick-list]:block [&_.slick-list]:overflow-hidden [&_.slick-list]:m-0 [&_.slick-list]:p-0',
    '[&_.slick-list:focus]:outline-none',
    '[&_.slick-list.dragging]:cursor-pointer',
    '[&_.slick-slider_.slick-track]:translate-x-0 [&_.slick-slider_.slick-track]:translate-y-0 [&_.slick-slider_.slick-track]:translate-z-0',
    '[&_.slick-slider_.slick-list]:translate-x-0 [&_.slick-slider_.slick-list]:translate-y-0 [&_.slick-slider_.slick-list]:translate-z-0',
    '[&_.slick-track]:relative [&_.slick-track]:top-0 [&_.slick-track]:left-0 [&_.slick-track]:block',
    '[&_.slick-track:before]:table [&_.slick-track:before]:content-[""]',
    '[&_.slick-track:after]:table [&_.slick-track:after]:content-[""] [&_.slick-track:after]:clear-both',
    '[&_.slick-loading_.slick-track]:invisible',
    '[&_.slick-slide]:hidden [&_.slick-slide]:float-left [&_.slick-slide]:h-full [&_.slick-slide]:min-h-[1px]',
    '[&_.slick-slide_img]:block',
    '[&_.slick-slide.slick-loading_img]:hidden',
    '[&_.slick-slide.dragging_img]:pointer-events-none',
    '[&_.slick-initialized_.slick-slide]:block',
    '[&_.slick-loading_.slick-slide]:invisible',
    '[&_.slick-vertical_.slick-slide]:block [&_.slick-vertical_.slick-slide]:h-auto [&_.slick-vertical_.slick-slide]:border [&_.slick-vertical_.slick-slide]:border-transparent',
    '[&_.slick-arrow.slick-hidden]:hidden',
    className
  )

  return (
    <section className={wrapperClasses}>
      <SlickSlider ref={ref} {...settings}>
        {children}
      </SlickSlider>
    </section>
  )
}

export default forwardRef(Slider)
