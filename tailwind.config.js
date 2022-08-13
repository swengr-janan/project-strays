/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Mouse Memoirs', 'sans-serif'],
    },
    colors: {
      primary: '',
      secondary: '',
    },
    extend: {
      width: {
        128: '32rem',
      },
    },
  },
  plugins: [],
}
