/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/*.{html,js}',
    './index.html',
    "./src/**/*.{html,js}"],
  theme: {
      extend: {
        fontFamily:{
          title: ['"Pacifico"', 'cursive']
        }
      },
  },
  plugins: [],
}

