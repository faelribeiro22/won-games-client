import type { Meta, StoryObj } from '@storybook/react'
import Ribbon from '.'

const meta = {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} satisfies Meta<typeof Ribbon>

export default meta
type Story = StoryObj<typeof Ribbon>

export const Basic: Story = {
  render: (args) => (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        background: '#888'
      }}
    >
      <Ribbon {...args} />
    </div>
  )
}
