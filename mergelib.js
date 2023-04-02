const merge = require('concat');
const fs = require('fs-extra');

const files = [
  './dist/angular15elements/runtime.js',
  './dist/angular15elements/polyfills.js',
  './dist/angular15elements/main.js'


]

merge(files, './dist/angular15elements.js');

// fs.copy('./dist/weather-element/assets/', 'elements/assets/')
console.info('file generated');
