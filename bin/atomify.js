#!/usr/bin/env node

var path = require('path')
  , cli = require('../lib/cli')
  , args = process.argv.slice(2)
  , argv = require('subarg')(args, {
    alias: {
      j: 'js'
      , c: 'css'
      , o: 'output'
      , d: 'debug'
      , h: 'help'
      , v: 'version'
      , s: 'server'
    }
  })

if (!args.length) argv = require(path.join(process.cwd(), 'package.json')).atomify;

cli(argv)
