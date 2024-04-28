const mix = require("laravel-mix");

mix
  .sourceMaps(true, "source-map")
  .js("src/js/app.js", "theme/assets/js")
  .sass("src/scss/app.scss", "theme/assets/css");
