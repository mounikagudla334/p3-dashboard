/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F5F1',
        ink: '#1B1E23',
        line: '#E1DFD6',
        teal: {
          DEFAULT: '#2F6E63',
          dark: '#234F47',
          light: '#DCEAE6',
        },
        rust: '#B5651D',
        slate: '#6B7280',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
