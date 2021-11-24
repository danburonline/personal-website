// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
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
