import type { Meta, StoryObj } from '@storybook/react'
import Gallery from '.'
import items from './mock'

const meta = {
  title: 'Gallery',
  component: Gallery,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} satisfies Meta<typeof Gallery>

export default meta
type Story = StoryObj<typeof Gallery>

export const Basic: Story = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Gallery {...args} />
    </div>
  )
}
