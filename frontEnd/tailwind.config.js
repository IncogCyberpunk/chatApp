/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,tsx,ts}",
  ],
  theme: {
    extend: {
      maxHeight:{
        "100": '25rem',
      }
    },
  },
  plugins: [require("daisyui")],
}

