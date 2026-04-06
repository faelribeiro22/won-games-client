import type { Meta, StoryObj } from '@storybook/react'
import FormSignIn from '.'

const meta = {
  title: 'Form/FormSignIn',
  component: FormSignIn
} satisfies Meta<typeof FormSignIn>

export default meta
type Story = StoryObj<typeof FormSignIn>

export const Basic: Story = {
  render: () => (
    <div style={{ width: 300, margin: 'auto' }}>
      <FormSignIn />
    </div>
  )
}
