// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors

const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 设计稿宽度，适配 iPhone
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.no-vw'], // 可通过 class 忽略转换
      minPixelValue: 1,
      mediaQuery: false,
    },
  },
}
export default config
