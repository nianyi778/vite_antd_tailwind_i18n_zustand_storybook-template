import type { Preview } from '@storybook/react'
import "../packages/ui/src/styles/shared-globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;