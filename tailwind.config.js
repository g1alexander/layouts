module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: false, //or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xsm: "320px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
