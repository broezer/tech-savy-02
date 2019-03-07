'use strict';

const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

function sassFiles(){
  return src('./_scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css'));
}

function sassFiles(){
  return src('./_scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css'));
}

function prefix(){
  return src('./css/**/*.css')
  .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
  .pipe(dest('./dist'));
}

exports.sassFiles = sassFiles;
exports.prefix = prefix;
exports.default = parallel(sassFiles, prefix);

watch('./_scss/**/*.scss', sassFiles);
watch('./css/**/*.css', prefix);
