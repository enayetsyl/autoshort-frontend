/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color theme using hex codes
        primary: "#4C96F5",
        secondary: "#FF6B6B",
        accent: "#FFD166",
        textColor: "#333333",
        bgColor: "#FFFFFF",
      },
    },
  },
  plugins: [],
}