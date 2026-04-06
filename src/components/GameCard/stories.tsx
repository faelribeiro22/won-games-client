import type { Meta, StoryObj } from '@storybook/react'
import GameCard from '.'

const meta = {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1jyc.jpg',
    price: 'R$ 235,00'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
} satisfies Meta<typeof GameCard>

export default meta
type Story = StoryObj<typeof GameCard>

export const Basic: Story = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}

export const WithRibbon: Story = {
  args: {
    ribbon: '20% OFF',
    ribbonSize: 'small',
    ribbonColor: 'primary'
  },
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}
