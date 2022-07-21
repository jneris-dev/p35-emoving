/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          200: "#A9AACC",
          500: "#444580",
        }
      }
    },
  },
  plugins: [],
}
