/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media',
    variants: {
        extend: {
          // ...
         filter: ['hover', 'focus', 'dark'],
        }
      }
}