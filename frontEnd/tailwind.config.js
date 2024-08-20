/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,tsx,ts}",
  ],
  theme: {
    extend: {
      height:{
        "104":"26rem",
      }
    },
  },
  plugins: [require("daisyui")],
}

