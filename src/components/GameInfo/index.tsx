import clsx from 'clsx'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import { MdAddShoppingCart, MdFavoriteBorder } from 'react-icons/md'

export type GameInfoProps = {
  title: string
  description: string
  price: string
  className?: string
}

const GameInfo = ({ title, description, price, className }: GameInfoProps) => {
  const wrapperClasses = clsx(
    'relative bg-white p-small',
    '[&_.ribbon]:right-[-1rem] [&_.ribbon]:before:border-r-[1rem]',
    'md:[&_.ribbon]:right-small md:[&_.ribbon]:top-small md:[&_.ribbon]:text-large md:[&_.ribbon]:before:border-none',
    className
  )

  return (
    <div className={wrapperClasses}>
      <Heading color="black" lineBottom>
        {title}
      </Heading>

      <Ribbon color="secondary" className="ribbon">{`$${price}`}</Ribbon>

      <p className="text-small text-gray mb-small md:max-w-[77rem]">
        {description}
      </p>

      <div className="flex flex-col items-center [&>button]:w-full [&>button]:mb-xxsmall md:flex-row-reverse md:[&>button]:w-auto md:[&>button]:mb-0">
        <Button icon={<MdAddShoppingCart />} size="large">
          Add to cart
        </Button>
        <Button icon={<MdFavoriteBorder />} size="large" minimal>
          Wishlist
        </Button>
      </div>
    </div>
  )
}

export default GameInfo
