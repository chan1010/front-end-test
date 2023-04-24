// const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./src/**/*.md",
  ],

  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#00b8ec",
        "secondary-light": "#ccf1fb",
        "ternary-light": "#f6f7f8",
        "primary-dark": "#00b8ec",
        "secondary-dark": "#ccf1fb",
        "ternary-dark": "#1E3851",

        "primary-text": "#999",
        "secondary-text": "#ccc",

        "primary-button": "#a5cd39"
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
      boxShadow: {
        '3xl': ' rgba(0, 0, 0, 0.35) 0px 5px 15px;',
      },
      gridTemplateRows: {
        '2-3.5': '1fr 3.5rem',
      },
      gridTemplateColumns: {
        '2-1': '2fr 1fr',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
