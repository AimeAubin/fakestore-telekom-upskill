/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: [ "Montserrat", "sans-serif" ],
        lora: [ "Lora", "serif" ],
        "dm-mono": [ "DM Mono", "monospace" ]
      }
    },
  },
  plugins: [],
};