/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        subHeading: ['Montserrat', 'sans-serif'],
        casual: ["'Open sans'", 'sans-serif']
      }
    },
  },
  plugins: [],
}