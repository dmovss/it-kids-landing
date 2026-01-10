/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFD600',
          purple: '#7B61FF',
          blue: '#00A3FF',
          pink: '#FF4D94',
          green: '#2DFF5E',
        }
      },
      borderRadius: {
        '3xl': '30px',
      }
    },
  },
  plugins: [],
}