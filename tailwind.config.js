/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        boxShadow: "#1fb6ff",
        green: "#00AA57",
        greenSecondary: "#49A760",
        yellow: "#FFC400",
        bgGray: "#F0F0F1",
        gray: "#6C6C78",
        primary: "#333A40",
        whiteColor: "#FAFAFA",
        red: "#FF5762",
        graySecondary: "#868688",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
    },
    boxShadow: {
      "2xl": "2px 2px 0px rgba(0, 0, 0, 0.16)",
      "3xl": "0px 0px 10px rgba(0, 0, 0, 0.15)",
    },
    screens: {
      md: "820px",
      xl: "1440px",
      xxl: "1920px",
    },
  },
  plugins: [],
};
// backgroundImage: {
//   "header-img": "url('/images/top_image.png')",
// },
