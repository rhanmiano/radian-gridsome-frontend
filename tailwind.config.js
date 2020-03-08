const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  theme: {
    extend: {
      fontFamily: {
        'avenir': ['Avenir', ...defaultTheme.fontFamily.sans],
        'glegoo': ['Glegoo', ...defaultTheme.fontFamily.serif],
        'glegoo-bold': ['Glegoo Bold', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'brand-p2': '#18D3C5',
        'brand-p1': '#14BBAF',
        'brand': '#11A89D',
        'brand-n1': '#0F8C83',
        'brand-n2': '#0E7971',
        'denotive-error': '#FF6565',
        'layout-w1': '#F5F5F5',
        'layout-w2': '#DEDEDE',
        'layout-b1': '#5C5C5C',
        'layout-b2': '#414141',
      }
    },
    container: {
      center: true,
    }
  },
  variants: {},
  plugins: [
    plugin(function({ addBase, config }) {
      addBase({
        'h1': { fontSize: config('theme.fontSize.4xl') },
        'h2': { fontSize: config('theme.fontSize.3xl') },
        'h3': { fontSize: config('theme.fontSize.xl') },
      })
    })
  ],
}
