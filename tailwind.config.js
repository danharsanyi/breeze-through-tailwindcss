module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    colors: {
      teal: '#06B6D4',
      white: '#FFFFFF',
      black: '#111827',
      "terminal-green": '#4AF626',
      transparent: 'transparent',
    },
    fontFamily: {
      heading: ['Inter'],
      body: ['Open Sans'],
    },
    extend: {
      gridAutoColumns: {
        '0.85': '85%',
      }
    },
  },
  variants: {},
  plugins: [
      require('@tailwindcss/forms'),
  ],
}
