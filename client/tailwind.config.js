/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       
      },
      colors: {
        footerColor: '#002F4A',
        mainBlueColor: '#1299E8',
        orangeColor : 'rgb(255, 87, 34)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
      screens:{
        'xs': '475px',
        ...defaultTheme.screens,
      }
    },
  },
   variants: {
    extend: {
      dropdown_sub_menu : ['hover']
    }
  },
  plugins: [],
}