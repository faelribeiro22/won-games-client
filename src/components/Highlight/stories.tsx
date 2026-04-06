import type { Meta, StoryObj } from '@storybook/react'
import Highlight from '.'
import item from './mock'

const meta = {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} satisfies Meta<typeof Highlight>

export default meta
type Story = StoryObj<typeof Highlight>

export const Basic: Story = {}

export const WithFloatImage: Story = {
  render: (args) => <Highlight {...args} floatImage="img/red-dead-float.png" />
}
