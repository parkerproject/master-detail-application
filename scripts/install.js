#!/usr/bin/env node
'use strict'

const fs = require('fs-extra')
const path = require('path')
const spawn = require('child_process').spawnSync
const tmplDir = path.join(__dirname, '../')
const wd = process.cwd()
const files = fs.readdirSync(tmplDir)
const dirname = wd.split('/').pop()

console.log('copying template...')
files.filter((file) => file.endsWith('.js'))
.forEach((file) => {
  fs.copySync(
    path.join(tmplDir, file),
    path.join(wd, file)
  )
})

console.log('installing dependencies...')
spawn('npm', ['install', '--save', 'react-mixin'])
console.log('done!')
