/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: '280px', max: '640px' },
       
      },
    },
  },
  plugins: [],
}