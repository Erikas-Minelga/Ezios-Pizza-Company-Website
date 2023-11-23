/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        robgraves: ["robgraves", "sans"],
        crayoncrumble: ["crayoncrumble", "sans"],
        courgette: ["courgette", "sans"],
        teko: ["teko", "sans"],
      },
      screens: {
        '3xl': '1800px',
      }
    },
  },
  plugins: [],
}

