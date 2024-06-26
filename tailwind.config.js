/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
        'sans': ['Bebas Neue']
    },
    extend: {
      colors: {
        "primary": "#ff90a0",
        "dark-mode": "#2b2b2b"
      },
    },
  },
  plugins: [],
}

