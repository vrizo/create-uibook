#!/usr/bin/env node

console.log('The script do nothing...')

var fs = require('fs');
var dir = 'uibook-example';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
