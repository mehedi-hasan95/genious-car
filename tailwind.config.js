/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange':'#FF3811',
        'dark-01' : '#151515',
        'dark-02' : '#444444',
        'dark-03' : '#737373'
      }
    },
  },
  plugins: [require("daisyui")],
}
