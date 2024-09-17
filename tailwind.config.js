/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1140px",
      },
      backgroundColor: {
        hbg: "#282828",
      },
      fontFamily: {
        pops: ["Poppins", "sans-serif"],
      },
      backgroundImage:{
        ban:"url('./assets/banner.png')"
      }
    },
  },
  plugins: [],
};
