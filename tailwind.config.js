/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#FFF2D8',
        color2: '#EAD7BB',
        color3: '#BCA37F',
        color4: '#113946',
        a: '#74E291',
        b: '#D24545'
      },
    },
  },
  plugins: [],
}