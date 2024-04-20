/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '568px',
      md: '768px',
      lg: '1280',
    },
  },
  plugins: [],
};
