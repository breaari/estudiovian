/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azullogo: '#0746A4',
        azuloscuro: '#031F49'
      },
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
        sanchez: ['"Sanchez"', 'serif'],
      },
     
    },
  },
  plugins: [],
}
