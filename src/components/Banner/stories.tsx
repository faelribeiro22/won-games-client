import type { Meta, StoryObj } from '@storybook/react'
import Banner from '.'

const meta = {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof Banner>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  )
}

export const WithRibbon: Story = {
  args: {
    ribbon: '20% OFF',
    ribbonSize: 'normal',
    ribbonColor: 'primary'
  },
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Banner {...args} />
    </div>
  )
}
