import { Story, Meta } from '@storybook/react/types-6-0'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as Meta

export const Basic: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayments: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayments.args = {
  downloadLink: 'https://wongames.com/game/download/1542',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:30'
  }
}
