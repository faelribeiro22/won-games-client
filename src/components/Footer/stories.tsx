import type { Meta, StoryObj } from '@storybook/react'
import Footer from '.'

const meta = {
  title: 'Footer',
  component: Footer
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof Footer>

export const Basic: Story = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Footer {...args} />
    </div>
  )
}
