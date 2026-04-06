import type { Meta, StoryObj } from '@storybook/react'
import { MdAddShoppingCart } from 'react-icons/md'
import Button from '.'

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Basic: Story = {
  args: {
    children: 'Buy Now'
  }
}

export const withIcon: Story = {
  args: {
    size: 'small',
    children: 'Buy Now',
    icon: <MdAddShoppingCart />
  }
}

export const asLink: Story = {
  args: {
    size: 'large',
    children: 'Buy Now',
    as: 'a',
    href: '/teste'
  }
}
