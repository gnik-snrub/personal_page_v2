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
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)'},
        }
      },
      animation: {
        'scroll': 'scroll 15s linear infinite',
        'scrollRev': 'scroll 15s linear infinite reverse'
      }
    },
  },
  plugins: [],
}

