const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const cssnano = require("gulp-cssnano");
const concat = require("gulp-concat");
// paths
const Paths = {
  Sass: "./src/Sass/**/*.scss",
  Imgs: "./src/Imgs/*",
  Js: "./src/Js/**/*.js",
};

// compile sass files
function compileSass() {
  return src(Paths.Sass)
    .pipe(sass())
    .pipe(autoprefixer("last 2 version"))
    .pipe(cssnano())
    .pipe(dest("./dest/css"))
    .pipe(browserSync.stream());
}

// handle JS

function JavaScript() {
  return src(Paths.Js)
    .pipe(concat("all.js"))
    .pipe(dest("./dest/Js"))
    .pipe(browserSync.stream());
}

//mifify img

function imageMin() {
  return src(Paths.Imgs)
    .pipe(imagemin())
    .pipe(dest("/dest/imgs"))
    .pipe(browserSync.stream());
}

function startServer() {
  browserSync.init({
    server: ".",
  });
}

exports.default = function () {
  startServer();
  watch(Paths.Sass, compileSass);
  watch(Paths.Js, JavaScript);
  watch("*.html").on("change", browserSync.reload);
};
