import pkg from 'gulp';
const { task, src, dest, watch, series } = pkg;
//import { task, src, dest, watch, series } from 'gulp';
//import cassnano from 'gulp-cssnano';
import sass from 'gulp-sass';

task('sass',function(){
    return src('app/style.scss')
    .pipe(sass())
    .pipe(dest('dist/css'));
});

task('watch',function(){
    watch('./app/*.scss',series('sass'));
    
    //watch('app/js/**/*.js',series('js'));
});