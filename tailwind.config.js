module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    colors: {
      // yellow: '#FDDC02',
      // orange: '#FF914D',
      teal: '#06B6D4',
      // purple: '#B948A4',
      // red: '#C51934',
      // green: '#7ED957',
      white: '#FFFFFF',
      // black: '#141414',
      // grey: {
      //   light: '#F6F6F6',
      //   medium: '#D4D4D4',
      // },
      transparent: 'transparent',
    },
    fontFamily: {
      heading: ['Inter'],
      body: ['Open Sans'],
    },
  },
  variants: {
      extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}