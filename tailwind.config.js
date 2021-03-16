

// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['.tmp/public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: 'media',
  theme: {
    listStyleType: {
      none: 'none',
      square: 'square',
      roman: 'upper-roman',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}