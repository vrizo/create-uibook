#!/usr/bin/env node
let fs = require('fs')
let dir = 'uibook-example'

console.log('Creating Uibook example structure')

console.log('DEBUG. process.env.HOME: ', process.env.HOME)
console.log('DEBUG. process.cwd(): ', process.cwd())
console.log('DEBUG. process.argv: ', process.argv)
console.log('DEBUG. process.env: ', process.env)
console.log('DEBUG. __dirname: ', __dirname)

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
