/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './**/*.js'],
  theme: {
    extend: {
      // other extended styles if any...
    },
    backgroundImage: {
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
    },
  },
  plugins: [],
}

 