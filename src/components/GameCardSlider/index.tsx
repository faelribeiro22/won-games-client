import clsx from 'clsx'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

import GameCard, { GameCardProps } from 'components/GameCard'
import Slider, { SliderSettings } from 'components/Slider'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
  className?: string
}

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <MdArrowForwardIos aria-label="next games" />,
  prevArrow: <MdArrowBackIos aria-label="previous games" />
}

const GameCardSlider = ({
  items,
  color = 'black',
  className
}: GameCardSliderProps) => {
  const colorClasses = {
    white: '[&_.slick-prev]:text-white [&_.slick-next]:text-white',
    black: '[&_.slick-prev]:text-black [&_.slick-next]:text-black'
  }

  const wrapperClasses = clsx(
    'xl:overflow-x-hidden',
    '[&_.slick-track]:flex [&_.slick-list]:flex',
    '[&_.slick-slide>div]:mx-xxsmall [&_.slick-slide>div]:flex-[1_0_auto] [&_.slick-slide>div]:h-full',
    '[&_.slick-list]:mx-[-0.8rem]',
    'lg:[&_.slick-slide>div]:mx-xsmall lg:[&_.slick-list]:mx-[-1.6rem]',
    '[&_.slick-prev]:block [&_.slick-prev]:cursor-pointer [&_.slick-prev]:absolute [&_.slick-prev]:top-1/2 [&_.slick-prev]:w-[2.5rem] [&_.slick-prev]:h-[2.5rem] [&_.slick-prev]:p-0 [&_.slick-prev]:translate-y-[-50%] [&_.slick-prev]:left-[-5.6rem]',
    '[&_.slick-next]:block [&_.slick-next]:cursor-pointer [&_.slick-next]:absolute [&_.slick-next]:top-1/2 [&_.slick-next]:w-[2.5rem] [&_.slick-next]:h-[2.5rem] [&_.slick-next]:p-0 [&_.slick-next]:translate-y-[-50%] [&_.slick-next]:right-[-5.6rem]',
    '[&_.slick-prev.slick-disabled]:invisible [&_.slick-next.slick-disabled]:invisible',
    colorClasses[color],
    className
  )

  return (
    <section className={wrapperClasses}>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <GameCard key={index} {...item} />
        ))}
      </Slider>
    </section>
  )
}

export default GameCardSlider
