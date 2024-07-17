/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        riseblue: ['#074CE7']

      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}

