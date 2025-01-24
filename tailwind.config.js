// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    minHeight: {
      0: "0",
      small: "350px",
      medium: "650px",
      large: "800px",
      full: "100%",
    },
    extend: {
      colors: {
        primary: "#FF40FF",
        primaryDark: "#CC00CC",
        primaryLight: "#FFC5FF",
      },
      height: {
        small: "350px",
        medium: "650px",
        large: "800px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
