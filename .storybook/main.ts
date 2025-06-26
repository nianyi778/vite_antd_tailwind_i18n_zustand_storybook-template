import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";
import tailwindConfig from "./tailwind.config";

// 解决 monorepo 中包路径问题
function getAbsolutePath(pkg: string) {
  return dirname(require.resolve(join(pkg, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../apps/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/experimental-addon-test"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  viteFinal: async (config) => {
    return {
      ...config,
      css: {
        postcss: {
          plugins: [
            require("tailwindcss")(tailwindConfig),
            require("autoprefixer"),
          ],
        },
      },
    };
  },
};
export default config;
