module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      animation:{
        'slideLeft': 'slideLeft 1s ease-in-out',
        'slideRight': 'slideRight 1s ease-in-out',
      },
      keyframes: {
        slideRight: {
          '0%': { left: '0%', color: '#9F51F6' },
          '100%': { left: '50%', color: 'white' },
        },
        slideLeft: {
          '0%': { left: '50%', color: '#9F51F6' },
          '100%': { left: '0%', color: 'white' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}