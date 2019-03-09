#!/usr/bin/env node
let path = require('path')
let fs = require('fs')
let dir = 'uibook'

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

const CONTROLLER = path.join(__dirname, 'src', 'uibook-controller.js')
const BUTTON = path.join(__dirname, 'src', 'button.uibook.js')

fs.copyFile(CONTROLLER, dir + '/uibook-controller.js', err => {
  if (err) throw err
  console.log('Created: ' + dir + '/uibook-controller.js')
})

fs.copyFile(BUTTON, dir + '/button.uibook.js', err => {
  if (err) throw err
  console.log('Created: ' + dir + '/button.uibook.js')
})

console.log('For more information please refer to Uibook Docs: ' +
  'https://github.com/vrizo/uibook/')
