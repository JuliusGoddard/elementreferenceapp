/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     backgroundImage: { 'background': "url('/src/images/background.webp')", 'pic01': "url('/src/images/pic01.jpg')" }
    },
  },
  plugins: [],
}
