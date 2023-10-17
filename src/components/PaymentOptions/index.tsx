import Heading from 'components/Heading'
import * as S from './styles'

export type PaymentsOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

const PaymentOptions = ({ cards, handlePayment }: PaymentsOptionsProps) => (
  <S.Wrapper>
    <S.Body>
      <Heading color="black" size="small" lineBottom>
        Payment
      </Heading>
      <S.CardsList>
        {cards?.map((card) => (
          <S.CardItem key={card.number}>
            <S.CardInfo>
              <img src={card.img} alt={card.flag} />
              {card.number}
            </S.CardInfo>
            <Radio
          </S.CardItem>
        ))}
      </S.CardsList>
    </S.Body>
    <S.Footer></S.Footer>
  </S.Wrapper>
)

export default PaymentOptions
