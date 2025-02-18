/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ivyora: ['ivyora-display', 'serif'], // Define Ivyora as a custom font
      },
    },
  },
  plugins: [],
};
