const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const sourcemaps = require("gulp-sourcemaps"); // So Istanbul is able to map the code
const tsProject = require("gulp-typescript").createProject("tsconfig.json");
const vfs = require("vinyl-fs");
const apidoc = require("gulp-apidoc");

const paths = {
  tocopy: [
    "./**",
    "!.git/**",
    "!./bin",
    "!./bin/**",
    "!./**/*.ts",
    "!./.vscode",
    "!./.vscode/**",
    "!./gulpfile.js",
    "!./*.log",
    "!./*.lock",
    "!./*.md",
    "!./*.json",
    "!./*.yml",
    "!./LICENSE",
    "!./test/unit/*.ts",
    "!./test/mocha.opts",
    "!./coverage",
    "!./coverage/**",
    "!./routes/**apidoc**",
    "!./tasks",
    "!./tasks/**",
    "!./node_modules",
    "!./node_modules/**",
    "!./dist",
    "!./dist/**",
  ],
  tsfiles: ["./src/config", "./src/controllers", "./src/datagateway", "./src/routes/*.ts", "./src/database", "./src/middleware", "./test"],
};

const genApidoc = (done) => {
  apidoc(
    {
      src: "./src/routes",
      dest: "../docs/apidoc",
    },
    done
  );
};

const copy = () => {
  return vfs
    .src(paths.tocopy, {
      dot: true,
    })
    .pipe(vfs.dest("./bin"));
};

const transpile = () => {
  return tsProject.src().pipe(sourcemaps.init()).pipe(tsProject()).js.pipe(sourcemaps.write("./maps")).pipe(gulp.dest("./bin"));
};

const watch = () => {
  // gulp.watch(["./src/routes/**"], apidoc);
  gulp.watch(paths.tsfiles, gulp.series(copy, transpile));
};

const run = (done) => {
  nodemon({
    exec: "nodemon bin/server.js",
    ext: "js json ts",
    ignore: "bin/**",
    watch: paths.tsfiles,
    tasks: ["nodemon-copy", "nodemon-transpile"],
    verbose: true,
    done,
  });
};

gulp.task("nodemon-copy", copy);
gulp.task("nodemon-transpile", transpile);

exports.default = gulp.series(copy, transpile);
exports.start = gulp.series(copy, transpile, run);
