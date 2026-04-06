import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: true
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          components: path.resolve(__dirname, '../src/components'),
          styles: path.resolve(__dirname, '../src/styles'),
          utils: path.resolve(__dirname, '../src/utils')
        }
      }
    })
  }
}

export default config
