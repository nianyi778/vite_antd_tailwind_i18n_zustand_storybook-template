import type { Preview } from "@storybook/react";
import "../packages/ui/src/styles/shared-globals.css";
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        default: "theme-default",
        light: "theme-light",
        dark: "theme-dark",
      },
      defaultTheme: "default", // 👈 名称而非 class
    }),
  ],
  parameters: {
    themes: {
      default: "default", // 👈 与上面一致
      list: [
        { name: "default", class: "theme-default", color: "#118df0" },
        { name: "light", class: "theme-light", color: "#ffffff" },
        { name: "dark", class: "theme-dark", color: "#000000" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
