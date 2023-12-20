module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        cyan: { A400: "#00d8ff" },
        red: { 500: "#ef3f36", 600: "#df3a32", 800: "#c12127" },
        light_blue: { 400: "#1abcfe", 800: "#0071bc", "400_01": "#29abe2" },
        green: {
          400: "#61bc5b",
          500: "#5ab055",
          600: "#539e43",
          A400: "#0acf83",
        },
        amber: { 400: "#f7df1e", A400: "#eaca05" },
        black: { 900: "#000000" },
        deep_orange: {
          300: "#ff7262",
          500: "#f16529",
          600: "#f24e1e",
          700: "#e44d26",
        },
        deep_purple: { A200: "#a259ff" },
        gray: {
          200: "#ebebeb",
          300: "#e6e6e6",
          400: "#b3b3b3",
          600: "#7e7e7e",
        },
        blue_gray: { 100: "#d9d9d9" },
        yellow: { A700: "#fcd900" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        leaguespartan: "League Spartan",
        roboto: "Roboto",
        leaguegothic: "League Gothic",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
