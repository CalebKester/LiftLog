// https://github.com/michael-ciniawsky/postcss-load-config
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")]
};
