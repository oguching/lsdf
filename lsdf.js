#!/usr/bin/env node

var program = require('commander'),
    fs = require('fs'),
    path = require('path');

program
  .version('0.0.1')

program
  .usage('[file] [options]')
  .option('-d, --directory [searchPath]', 'Search in directory')
  .arguments('<argument>')
  .action(function (argument, options){
    
    arg = argument;
  
    var dir = '.'; 
  
    if(options.directory) {
      dir = options.directory;
    }
    
    fs.readdir(dir, function(err, files) {
      
      if (err) {
        throw err;
      }
      

      files.map(function (file) {
          return path.join(process.cwd(), dir, file);
      }).filter(function(file) {
          return fs.statSync(file).isFile();
      }).forEach(function(file) {

         if ((path.basename(file).replace(path.extname(file), '')) === arg) {
           console.log(path.basename(file));
         } 
        
      });
    });
  })
  .parse(process.argv);

if (typeof arg === 'undefined') {
  program.help();
  process.exit(1);
}
