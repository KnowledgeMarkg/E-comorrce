/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          500: '#031525', // Use any color code you want
        },
      },
    },
  },
  variants: {},
  plugins: [],
}

