import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSize } from 'components/Ribbon'
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from 'styled-icons/material'
import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
  ribbon?: string
  ribbonSize?: RibbonSize
  ribbonColor?: RibbonColors
}

const GameCard = ({
  developer,
  img,
  price,
  title,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonSize = 'small',
  ribbonColor = 'primary'
}: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
