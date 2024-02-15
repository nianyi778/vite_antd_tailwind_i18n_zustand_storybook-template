import type { Config } from 'tailwindcss'
import path from 'path'
import sharedConfig from '@elestyle/tailwind-config/tailwind.config.ts'

const config: Pick<Config, 'presets'> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        path.resolve(__dirname, '../../packages/ui/src/components/**/*{.js,.ts,.jsx,.tsx}'),
      ],
    },
  ],
}

export default config
