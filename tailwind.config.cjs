/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',

      gray100: '#f1f5f9',
      gray200: '#e2e8f0',
      gray300: '#64748b',
      gray400: '#4b5563',
      gray500: '#374151',
      gray600: '#1f2937',

      violet100: '#312e81',
      violet200: '#4c1d95',

      blue500: '#3b82f6',
    },
  },
  plugins: [],
}
