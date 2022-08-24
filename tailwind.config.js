/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        dark100: '#505050',
        dark400: 'rgb(66, 66, 66)',
        dark800: 'rgb(57, 57, 57)',
        primary: '#088dcd',
        white100: '#088dcd',
        white400: '#eeebcd',
        white800: '#ccc',
      }
    },
  },
  plugins: [],
}
