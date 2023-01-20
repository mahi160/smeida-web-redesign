/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d3ebff",
          200: "#a6d7ff",
          300: "#7ac4fe",
          400: "#4db0fe",
          500: "#219cfe",
          600: "#1a7dcb",
          700: "#145e98",
          800: "#0d3e66",
          900: "#071f33"
        },
        accent: {
          100: "#ffebcc",
          200: "#ffd699",
          300: "#ffc266",
          400: "#ffad33",
          500: "#ff9900",
          600: "#cc7a00",
          700: "#995c00",
          800: "#663d00",
          900: "#331f00"
        },
        text: colors.neutral
      }
    },
  },
  plugins: [],
}
