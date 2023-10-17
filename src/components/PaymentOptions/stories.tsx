import { Story, Meta } from '@storybook/react/types-6-0'
import PaymentOptions from '.'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions
} as Meta

export const Basic: Story = (args) => <PaymentOptions {...args} />
