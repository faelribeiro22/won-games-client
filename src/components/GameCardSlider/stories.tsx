import type { Meta, StoryObj } from '@storybook/react'
import GameCardSlider from '.'
import items from './mock'

const meta = {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} satisfies Meta<typeof GameCardSlider>

export default meta
type Story = StoryObj<typeof GameCardSlider>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameCardSlider {...args} />
    </div>
  )
}
