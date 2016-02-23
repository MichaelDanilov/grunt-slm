'use strict';

module.exports = function(grunt) {


  grunt.registerMultiTask('slm', 'Compile from Slm to HTML.', function() {
    var options = this.options({
    });

    var compile = require('slm').compile;
    var path = require('path');

    this.files.forEach(function(f) {
      if (!f.src.length) {
        return grunt.fail.warn('No source files were found.');
      }
      
      f.src.forEach(function(filepath) {
        var src = grunt.file.read(filepath);
        var html = compile(src)(options.data);
        var dest, filename;

        if (f.dest.charAt(f.dest.length - 1) === '/') {
          filename = path.basename(filepath, '.slm');
          dest = f.dest + filename + '.html';
          grunt.file.write(dest, html);
        } else {
          dest = f.dest;
          grunt.file.write(dest, html);
        }

        grunt.log.writeln('File ' + dest + ' created.');
      });
    });
  });

};
