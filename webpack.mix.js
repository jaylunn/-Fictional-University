// webpack.mix.js

let mix = require("laravel-mix");

mix.disableNotifications();

mix.js("src/index.js", "build").setPublicPath("build");
mix.sass("css/style.scss", "build").setPublicPath("build");

mix.options({
   processCssUrls: false,
});

// https://browsersync.io/docs/options/
mix.browserSync({
   proxy: "https://127.0.0.1/wp03-Shell/",
   //proxy: "https://localhost/wp03-Shell/",

   files: ["**/*.js", "**/*.css", "**/*.php"],

   //browser: ["chrome", "firefox"] //both browsers
   //browser: "chrome"
   browser: "firefox",
});
