import path from 'path';
import tailwindConfig from '../apps/kds/tailwind.config.ts'

const config = {
  presets: [
    {
      ...tailwindConfig,
      content: [
        path.resolve(__dirname, "../packages/ui/src/components/**/*{.js,.ts,.jsx,.tsx}"),
      ],
    },
  ],
};

export default config;
