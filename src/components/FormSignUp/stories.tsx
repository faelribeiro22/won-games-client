import type { Meta, StoryObj } from '@storybook/react'
import FormSignUp from '.'

const meta = {
  title: 'Form/FormSignUp',
  component: FormSignUp
} satisfies Meta<typeof FormSignUp>

export default meta
type Story = StoryObj<typeof FormSignUp>

export const Basic: Story = {
  render: () => (
    <div style={{ width: 300, margin: 'auto' }}>
      <FormSignUp />
    </div>
  )
}
