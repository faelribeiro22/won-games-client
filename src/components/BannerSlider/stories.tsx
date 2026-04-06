import type { Meta, StoryObj } from '@storybook/react'
import BannerSlider from '.'
import items from './mock'

const meta = {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} satisfies Meta<typeof BannerSlider>

export default meta
type Story = StoryObj<typeof BannerSlider>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <BannerSlider {...args} />
    </div>
  )
}
