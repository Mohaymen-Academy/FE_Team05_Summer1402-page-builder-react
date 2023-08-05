/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'input',
    'label',
    'subLabel',
    'btn-primary',
    'btn-edit',
    'btn-frame',
    'input-drop',
    'settings',
    'header',
    'settings-header',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          border: {light: '#ebebee'},
          main: '#9a9dab',
          light: '#d7d8dd',
          light2: '#F5F5F7',
          dark: '#37383e',
          hover: '#6C6E78',
        },
        primary: {
          border: {
            light: '#9bb8ff',
          },
          main: '#0066ff',
          light: '#e9f1ff',
        },
        secondary: {
          border: {
            light: '#ffd1a1',
          },
        },
      },
    },
  },
  plugins: [],
};
