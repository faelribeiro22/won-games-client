import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: `Read Dead it's back`,
    subtitle: `It's a long story`,
    buttonLabel: 'Buy now',
    backgroundImage: '/img/red-dead-background.jpg',
    buttonLink: '/rdr2'
  }
} as Meta

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <Highlight {...args} floatImage="img/red-dead-float.png" />
)
