import type { Meta, StoryObj } from '@storybook/react'
import TextContent from '.'
import textMock from './mock'

const meta = {
  title: 'Game/TextContent',
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} satisfies Meta<typeof TextContent>

export default meta
type Story = StoryObj<typeof TextContent>

export const Basic: Story = {}
