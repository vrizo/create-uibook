#!/usr/bin/env node

var fs = require('fs');
var dir = '../../test';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
