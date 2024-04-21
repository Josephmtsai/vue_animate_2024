/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '568px',
      md: '768px',
      lg: '1280',
    },
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        blink: 'blink 0.75s ease-in-out infinite',
        'slide-in': 'slideIn 1s ease-out 1s forwards',
        'slide-out': 'slideOut 1s ease-out 1s forwards',
      },
    },
  },
  plugins: [],
};
