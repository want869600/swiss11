/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#DBE2D9',        // Postcard Cream
        paper: '#8EAF9D',        // Aged Paper
        steel: '#8E9CA3',        // Faded Steel
        harbor: '#5C5346',       // Harbor Blue
        stamp: '#8EAF9D',        // Warm Coral
        ink: '#5C5346',          // Ink Charcoal
        sage: '#5C5346',
        earth: '#8EAF9D',
        'earth-dark': '#8E9CA3',
        terracotta: '#8EAF9D',
        slate: '#8EAF9D',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
      },
    },
  },
  plugins: [],
}
