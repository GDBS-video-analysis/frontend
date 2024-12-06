/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          60: "#D94B3C",
          90: "#C22918",
        },
        default: {
          white: "#FFFFFF",
          allert: "#DA1E28",
        },
        gray: {
          10: "#F2F4F8",
          20: "#DDE1E6",
          30: "#C1C7CD",
          60: "#697077",
          90: "#21272A",
        },
      },
    },
  },
  plugins: [],
};
