/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#aabd6b",
        brandDark: "#151616",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        varves: ['Varves', 'sans-serif'], // Added Varves font family
      },
      container:{
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
          md: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
          '3xl': '8rem',
          '4xl': '10rem',
          '5xl': '12rem',
          '6xl': '14rem',
        },
      }
    },
  },
  plugins: [],
};
 