import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from "path"
import tailwindConfig from './tailwind.config.ts'

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../apps/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath("@storybook/experimental-addon-test")
  ],
  "framework": {
    "name": getAbsolutePath('@storybook/react-vite'),
    "options": {}
  },
  viteFinal: async (config, { configType }) => {
    // 👇 添加 PostCSS 支持（默认自动处理）
    return {
      ...config,
      css: {
        postcss: {
          plugins: [
            require('../apps/kds/node_modules/tailwindcss')(tailwindConfig),
            require('../apps/kds/node_modules/autoprefixer')
          ]
        }
      }
    }
  }
};
export default config;