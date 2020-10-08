var gulp = require('gulp');
var cassnano = require('gulp-cssnano');
var sass = require('gulp-sass');

gulp.task('sass',function(){
    return gulp.src('app/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch',function(){
    gulp.watch('./app/*.scss',gulp.series('sass'));
    
    gulp.watch('app/js/**/*.js',gulp.series('js'));
});