
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'Poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "" 
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}