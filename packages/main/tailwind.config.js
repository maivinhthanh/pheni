/** @type {import('tailwindcss').Config} */
import config from 'common/tailwind.config'

export default {
  ...config,
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../common/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

