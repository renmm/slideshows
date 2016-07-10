var gulp = require('gulp')
var del = require('del')

gulp.task('default', ['clean'], function(callback) {
	console.log('生成gh-pages目录')
	gulp.src('./example/**')
        .pipe( gulp.dest('./gh-pages/example') );
	gulp.src('./reveal.js/**')
        .pipe( gulp.dest('./gh-pages/reveal.js') );
    return callback()
});

// 清除目录
gulp.task('clean', function(callback) {
	console.log('开始清理gh-pages目录')
    return del(['./gh-pages/**'], callback)
});