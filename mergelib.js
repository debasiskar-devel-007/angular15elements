const merge = require('concat');
const fs = require('fs-extra');

const files = [
  './dist/weather-element/runtime-es2015.js',
  './dist/weather-element/polyfills-es2015.js',
  './dist/weather-element/main-es2015.js',


]

merge(files, './elements/angular15elements.js');

// fs.copy('./dist/weather-element/assets/', 'elements/assets/')
console.info('file generated');
