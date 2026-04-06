import type { Meta, StoryObj } from '@storybook/react'
import Menu from '.'

const meta = {
  title: 'Menu',
  component: Menu
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof Menu>

export const Basic: Story = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
}
