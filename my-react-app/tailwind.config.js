/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {primary: "#00A7EB", secondary: "rgb(162, 222, 246)", third: "rgb(81, 145, 171)"}},
  },
  plugins: [],
}