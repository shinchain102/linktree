/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ivyora: ['ivyora', 'serif'], // Define Ivyora as a custom font
      },
    },
  },
  plugins: [],
};
