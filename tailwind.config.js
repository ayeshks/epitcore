/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#31363F',
        'white': '#EEEEEE',
        'red': '#A0153E'
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}

