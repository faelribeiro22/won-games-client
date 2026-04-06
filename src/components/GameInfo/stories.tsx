import type { Meta, StoryObj } from '@storybook/react'
import GameInfo from '.'
import mockGame from './mock'

const meta = {
  title: 'Game/GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame
} satisfies Meta<typeof GameInfo>

export default meta
type Story = StoryObj<typeof GameInfo>

export const Basic: Story = {
  render: (args) => (
    <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
      <GameInfo {...args} />
    </div>
  )
}
