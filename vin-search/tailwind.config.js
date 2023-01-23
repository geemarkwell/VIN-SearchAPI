/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ncs-blue': '#4d66ab',
        'ncs-secondary': '#010b1b'
      },
    },
  },
  plugins: [],
}
