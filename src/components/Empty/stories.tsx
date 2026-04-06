import type { Meta, StoryObj } from '@storybook/react'
import Empty from '.'

const meta = {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof Empty>

export const Default: Story = {
  args: {
    title: 'Your wishlist is empty',
    description: 'Games added to your wishlist will appear here',
    hasLink: true
  }
}
