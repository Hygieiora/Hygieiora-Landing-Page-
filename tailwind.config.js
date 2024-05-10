/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#dadd05dd",
        brightColor: "#0bd34daa",
        backgroundColor: "#110391ee",
      },
    },
  },
  plugins: [],
};
