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
        primary: "#FFE000",
        primaryDark: "#FFD000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
