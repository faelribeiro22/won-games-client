import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} as Meta

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <Highlight {...args} floatImage="img/red-dead-float.png" />
)
