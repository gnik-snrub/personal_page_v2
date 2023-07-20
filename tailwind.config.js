/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        raisin: {
          500: '#2A222A',
        },
        cream: {
          500: '#E4E7C1',
        },
        verdigris: {
          500: '#7FB9BD',
        },
        plum: {
          500: '#873582',
        }
      },
    },
  },
  plugins: [],
}

