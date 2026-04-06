import { useEffect, useState, useRef } from 'react'
import { MdArrowBackIos, MdArrowForwardIos, MdClose } from 'react-icons/md'
import SlickSlider from 'react-slick'
import clsx from 'clsx'

import Slider, { SliderSettings } from 'components/Slider'

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
  className?: string
}

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <MdArrowForwardIos aria-label="next image" />,
  prevArrow: <MdArrowBackIos aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

const Gallery = ({ items, className }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  const wrapperClasses = clsx(
    '[&_.slick-prev]:block [&_.slick-prev]:text-white [&_.slick-prev]:cursor-pointer [&_.slick-prev]:absolute [&_.slick-prev]:top-1/2 [&_.slick-prev]:w-[2.5rem] [&_.slick-prev]:h-[2.5rem] [&_.slick-prev]:p-0 [&_.slick-prev]:translate-y-[-50%] [&_.slick-prev]:left-[-5.6rem]',
    '[&_.slick-next]:block [&_.slick-next]:text-white [&_.slick-next]:cursor-pointer [&_.slick-next]:absolute [&_.slick-next]:top-1/2 [&_.slick-next]:w-[2.5rem] [&_.slick-next]:h-[2.5rem] [&_.slick-next]:p-0 [&_.slick-next]:translate-y-[-50%] [&_.slick-next]:right-[-5.6rem]',
    '[&_.slick-prev.slick-disabled]:invisible [&_.slick-next.slick-disabled]:invisible',
    '[&_.slick-slide>div]:mx-xsmall [&_.slick-slide>div]:cursor-pointer',
    '[&_.slick-list]:mx-[-1.6rem]',
    'xl:overflow-x-hidden',
    className
  )

  const modalClasses = clsx(
    'fixed w-full h-full top-0 left-0 bg-black/70 flex justify-center items-center z-modal transition-opacity duration-default',
    {
      'opacity-100': isOpen,
      'opacity-0 pointer-events-none': !isOpen
    }
  )

  return (
    <div className={wrapperClasses}>
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <img
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label} `}
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(index, true)
            }}
          />
        ))}
      </Slider>

      <div className={modalClasses} aria-label="modal" aria-hidden={!isOpen}>
        <div
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
          className="text-white absolute left-0 top-0 cursor-pointer w-full h-full text-right"
        >
          <MdClose size={40} />
        </div>
        <div className="max-w-[min(120rem,100%)] max-h-[80rem]">
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <img key={`gallery-${index}`} src={item.src} alt={item.label} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Gallery
