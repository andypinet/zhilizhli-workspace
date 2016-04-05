var sass = require('gulp-ruby-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

module.exports = function(injectors) {
    injectors.gulp.task("build-sass", function() {
        return sass(injectors.paths.srcRoot + '/sass/**/*.scss', {
            require: ["sass-json-vars", "sass-globbing", "mygem"],
            verbose: true
        })
            .on('error', sass.logError)
            .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
            .pipe(injectors.gulp.dest(injectors.paths.destRoot + '/css/'));
    });

    injectors.gulp.task("watch-sass", function() {
        injectors.gulp.watch(injectors.paths.srcRoot + '/sass/**/*.scss', ["build-sass"]);
    });
};