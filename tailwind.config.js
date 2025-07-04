/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'geist': ['Geist', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'new-valley': ['New Valley', 'sans-serif'],
      },
    },
  },
  plugins: [],
}