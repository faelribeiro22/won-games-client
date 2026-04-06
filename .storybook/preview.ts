import type { Preview } from '@storybook/react'
import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'won-light',
      values: [
        {
          name: 'won-light',
          value: '#FAFAFA'
        },
        {
          name: 'won-dark',
          value: '#06092B'
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
