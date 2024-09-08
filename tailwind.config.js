/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {"jarkata": '"Plus Jakarta Sans",system-ui,sans-serif'},
    },
  },
  plugins: [],
}