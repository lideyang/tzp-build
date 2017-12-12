var gulp = require('gulp');
var watch = require('gulp-watch');
var bom = require('gulp-bom');
var hash = require('lidy-static-hash');


// html添加hash后缀
gulp.task('html', function (cb) {
    gulp.src("../workspace/finance/web/src/main/webapp/pages/**/*.html")
        .pipe(hash({asset: '../workspace/finance/web/src/main/webapp/'}))
        .pipe(bom())
        .pipe(gulp.dest("./dist/"))
        .on('end', cb);
});
//复制java项目文件
gulp.task('default', function() {
  return gulp.src('../workspace/finance/web/src/main/webapp/**')
    .pipe(watch('../workspace/finance/web/src/main/webapp/**'))
    .pipe(gulp.dest('../webapp/wtpwebapps/web'));
});