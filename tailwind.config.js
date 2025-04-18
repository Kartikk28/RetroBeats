/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        retro: ['"Monoton"', 'cursive'],     // 🕺 Headings
        body: ['"Inter"', 'sans-serif'],     // 📖 Descriptions
      },
    },
  },
  plugins: [],
}
