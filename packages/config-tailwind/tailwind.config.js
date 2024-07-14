/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx}', `${__dirname}/../ui-tailwind/**/*.{ts,tsx}`],
  // content: ['src/**/*.{ts,tsx}'],

  theme: {
    extend: {
      colors: {},

      keyframes: {
        'text-appear': {
          '0%': { opacity: 0, transform: 'translateY(-50%)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' },
        },
      },
      animation: {
        'text-appear': 'text-appear 2.5s 1',
      },
    },
  },
  safelist: [
    'border-red-600',
    'bg-red-600',
    'hover:bg-red-300',
    'border-sky-600',
    'bg-sky-600',
    'hover:bg-sky-300',
    'border-green-600',
    'bg-green-600',
    'hover:bg-green-300',
    'border-amber-600',
    'bg-amber-600',
    'hover:bg-amber-300',
    'border-gray-600',
    'bg-gray-600',
    'hover:bg-gray-300',
    'text-red-700',
    'text-sky-700',
    'text-green-700',
    'text-amber-700',
    'text-gray-700',
  ],

  plugins: [],
};
