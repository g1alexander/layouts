module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: false, //or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// "build:css": "postcss ./src/tailwind.css -o ./public/css/main.css",
// "build": "NODE_ENV=production postcss ./src/tailwind.css -o ./public/css/main.css",
// "dev": "nodemon -x npm run build:css -w src/tailwind.css -w tailwind.config.js -w public/index.html"
