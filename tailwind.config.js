const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

const customColors = {
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
module.exports = {
  important: true,
  theme: {
    extend: {
      fontFamily: {
        'avenir': ['Avenir', ...defaultTheme.fontFamily.sans],
        'avenir-roman': ['Avenir Roman', ...defaultTheme.fontFamily.sans],
        'avenir-medium': ['Avenir Medium', ...defaultTheme.fontFamily.sans],
        'glegoo': ['Glegoo', ...defaultTheme.fontFamily.serif],
        'glegoo-bold': ['Glegoo Bold', ...defaultTheme.fontFamily.serif],
      },
      colors: customColors,
      fontSize: {
        'xxs': '.6rem'
      },
    },
    container: {
      center: true,
    }
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
  },
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
