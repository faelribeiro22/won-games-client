import type { Meta, StoryObj } from '@storybook/react'
import Showcase from '.'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

const meta = {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: ' auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} satisfies Meta<typeof Showcase>

export default meta
type Story = StoryObj<typeof Showcase>

export const Default: Story = {
  args: {
    heading: 'Most Popular',
    games: gamesMock,
    highlight: highlightMock
  }
}
