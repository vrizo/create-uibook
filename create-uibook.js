#!/usr/bin/env node
let fs = require('fs')
let dir = 'uibook-example'

console.log('Creating Uibook example structure')

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

fs.copyFile('src/button.uibook.js', dir + '/button.uibook.js', err => {
  if (err) throw err
  console.log('Created: ' + dir + '/button.uibook.js')
});

fs.copyFile('src/uibook-controller.js', dir + '/uibook-controller.js', err => {
  if (err) throw err
  console.log('Created: ' + dir + '/uibook-controller.js')
})

console.log('For more information please refer to Uibook Docs: ' +
  'https://github.com/vrizo/uibook/')
