const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
