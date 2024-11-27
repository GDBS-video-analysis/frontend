/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          90: "#C22918",
          60: "#D94B3C",
        },
        default: {
          white: "#FFFFFF",
          alert: "#DA1E28",
        },
        gray: {
          30: "#C1C7CD",
          90: "#21272A",
          20: "#DDE1E6",
          90: "#121619",
          10: "#F2F4F8",
          60: "#697077",
        },
      },
    },
  },
  plugins: [],
};
