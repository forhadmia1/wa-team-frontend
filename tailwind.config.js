/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#74b9ff',
      'secondary': '#0984e3',
      'base-100': '#ecf0f1',
      'accent': '#b2bec3',
    },
    extend: {},
  },
  plugins: [],
}
