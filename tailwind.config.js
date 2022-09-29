/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      },
      colors: {
        darkPurple: '#2A283E',
        primaryGray: '#9D9AA0',
        primaryBlue: '#4D95A8',
        primaryPurple: '#8360B2',
        lightBlue: '#89D5E8',
        lightPink: '#C5AEE2',
        blueOverlay: 'rgba(69, 158, 186, 0.8)'
      },
      backgroundImage: {
        bgFooter: "url('./assets/footer-img.png')"
      }
    },
  },
  plugins: [],
}
