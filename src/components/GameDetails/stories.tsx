import type { Meta, StoryObj } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'
import mockGame from './mock'

const meta = {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame as GameDetailsProps,
  argTypes: {
    releaseDate: {
      control: 'date'
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative', 'Horror']
      }
    }
  }
} satisfies Meta<typeof GameDetails>

export default meta
type Story = StoryObj<typeof GameDetails>

export const Basic: Story = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameDetails {...args} />
    </div>
  )
}
