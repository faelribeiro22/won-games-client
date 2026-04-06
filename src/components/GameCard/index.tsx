import clsx from 'clsx'
import { MdAddShoppingCart, MdFavorite, MdFavoriteBorder } from 'react-icons/md'

import Ribbon, { RibbonColors, RibbonSize } from 'components/Ribbon'
import Button from 'components/Button'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSize
  onFav?: () => void
  className?: string
}

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  onFav,
  className
}: GameCardProps) => {
  const wrapperClasses = clsx(
    'relative flex flex-col w-full h-full bg-white',
    className
  )

  const imageBoxClasses = clsx(
    'min-h-[14rem] w-full',
    'bg-[#f6f7f8] bg-gradient-to-r from-[#f6f7f8] via-[#edeef1] to-[#f6f7f8]',
    'bg-[length:80rem_14rem] animate-[placeholderShimmer_1s_linear_infinite_forwards]',
    '[&_img]:w-full [&_img]:h-full [&_img]:object-cover'
  )

  const priceClasses = (isPromotional?: boolean) =>
    clsx('inline-flex font-bold h-12 items-center', {
      'text-white px-xxsmall bg-secondary rounded mr-[0.4rem]': !isPromotional,
      'text-gray line-through mr-xxsmall': isPromotional
    })

  return (
    <article className={wrapperClasses}>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      <div className={imageBoxClasses}>
        <img src={img} alt={title} />
      </div>
      <div className="flex flex-col justify-between relative h-full m-xsmall">
        <div className="max-w-[calc(100%-2.5rem)]">
          <h3 className="text-medium leading-[1.6rem] font-bold text-black">
            {title}
          </h3>
          <h4 className="text-small font-bold text-gray">{developer}</h4>
        </div>
        <div
          onClick={onFav}
          role="button"
          className="text-primary absolute right-0 top-[-0.5rem] cursor-pointer [&_svg]:w-[2.5rem]"
        >
          {favorite ? (
            <MdFavorite aria-label="Remove from Wishlist" />
          ) : (
            <MdFavoriteBorder aria-label="Add to Wishlist" />
          )}
        </div>
        <div className="flex items-center justify-end mt-xxsmall">
          {!!promotionalPrice && (
            <div className={priceClasses(true)}>{price}</div>
          )}
          <div className={priceClasses(false)}>{promotionalPrice || price}</div>
          <Button icon={<MdAddShoppingCart />} size="small" />
        </div>
      </div>
    </article>
  )
}

export default GameCard
