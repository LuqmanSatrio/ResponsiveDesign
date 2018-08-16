var gulp = require('gulp');
var bs = require('browser-sync').create();
var reload      = bs.reload;
 gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("**/*.css").on("change", reload);
});
