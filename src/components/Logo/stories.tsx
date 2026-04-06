import type { Meta, StoryObj } from '@storybook/react'
import Logo from '.'

const meta = {
  title: 'Logo',
  component: Logo
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof Logo>

export const Basic: Story = {}
