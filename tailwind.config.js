// tailwind.config.js

// Import the Material Tailwind utility function
const withMT = require("@material-tailwind/react/utils/withMT");

// Export the configuration using the utility function
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          500: '#031525', // Example custom color
        },
      },
    },
  },
  variants: {},
  plugins: [],
});
