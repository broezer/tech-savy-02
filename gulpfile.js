'use strict';

const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass');

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
exports.sassFiles = sassFiles;
exports.default = parallel(sassFiles);

watch('./_scss/**/*.scss', sassFiles);
