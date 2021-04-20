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

//    "bootstrap": "purgecss --css sass/custom.css --content ./public/bootstrap/**/**.html --content ./public/index.html --content ./public/bootstrap/index.html -o ./public/css/bootstrap.css"
