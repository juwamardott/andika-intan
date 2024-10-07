/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        great: ["Great Vibes"],
        poppins: ["Poppins"],
        play: ["Playfair Display"],
        sacramento: ["Sacramento"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        color1: "#8f7767",
        color2: "#a68229",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bermuda: "#78dcca",
      },
    },
  },
  plugins: [],
};
