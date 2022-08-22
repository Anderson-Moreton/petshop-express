/* eslint-disable no-undef */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      borderRadius: {
        '2.5': '2.5rem',
        '1.8': '1.875rem',
        '0.25': '0.25rem',
      },
      colors: {
        darkGray: '#818181',
        lightGray: '#F2F2F2',
        lightDanger: '#FFD6D6',
        darkDanger: '#990D00',
        lightYellow: '#FFF6E0',
        darkYellow: '#664900',
        lightGreen: '#F1FFEB',
        darkGreen: '#005931',
        opaGreen: '#00DF7C',
      },
      spacing: {
        '0.625': '0.625rem',
        '0.125': '0.125rem',
        '0.562': '0.562rem',
      },
      screens: {
        'ls': '530px',
      },
      width: {
        '74': '18.5rem',
      },
      fontSize: {
        '56': '3.5rem',
        '8': '0.5rem',
        '180': '11.25rem'
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
