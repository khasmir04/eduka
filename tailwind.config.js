module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3f3697',
          DEFAULT: '#3f3697',
          dark: '#382f83',
        },
        secondary: {
          light: '#fb2b76',
          DEFAULT: '#fb2b76',
          dark: '#fb2b76',
        },
        tertiary: {
          light: '#bbbbbb',
          DEFAULT: '#bbbbbb',
          dark: '#bbbbbb',
        },
        c_light: {
          light: '#fafafa',
          DEFAULT: '#fafafa',
          dark: '#fafafa',
        },
        c_dark: {
          light: '#323232',
          DEFAULT: '#323232',
          dark: '#323232',
        },
        c_gray: {
          light: '#f4f4fc',
          DEFAULT: '#969696',
          dark: '#969696',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
