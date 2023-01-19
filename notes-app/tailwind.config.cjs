/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-dark": "#3a3a3a",
        "clr-black": "#111111",
        "clr-white": "#fefefe",
        "clr-danger": "rgb(249,84,84)",
        "primary-100": "#7634d8",
        // "primary-300": "#691e13",
        // "primary-100a": "#f9e82e;",
        // "secondary-100": "#11c7b1",
        // "secondary-400": "#399195",
        // "secondary-500": "#0d524a",
        // "secondary-500b": "#155b5c",
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(180deg, #982905 0%, #381015 100%)",
        "gradient-2": "linear-gradient(180deg, #0beed3 0%, #0c4944 100%)",
        "gradient-3": "linear-gradient(180deg, #f6af0a 0%, #c17b02 100%)",
        "gradient-4": "linear-gradient(180deg, #0beed3 0%, #0c4944 100%)",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}