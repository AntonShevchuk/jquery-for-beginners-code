/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
