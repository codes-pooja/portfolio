/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'primary': 'bg-purple-600',
        'secondary':'rgb(10, 10, 66)'
      }
    },
    fontFamily: {
      'hero-font': 'Sriracha'

    }
  },
  plugins: [],
}

