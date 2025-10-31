/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // barcha fayllarni qamrab oladi
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a1a34",
        accent: "#f7c225",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
