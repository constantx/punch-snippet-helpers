/*jslint indent:2 */
/*global module:false*/

/*jslint indent:2, node:true, nomen:true, unparam: true */
/*global require:false */

(function () {
  "use strict";

  module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
      // Metadata.
      pkg: grunt.file.readJSON('package.json'),
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
      // Task configuration.
      concat: {
        options: {
          banner: '<%= banner %>',
          stripBanners: true
        },
        dist: {
          src: ['lib/<%= pkg.name %>.js'],
          dest: 'dist/<%= pkg.name %>.js'
        }
      },
      uglify: {
        options: {
          banner: '<%= banner %>'
        },
        dist: {
          src: '<%= concat.dist.dest %>',
          dest: 'dist/<%= pkg.name %>.min.js'
        }
      },
      jslint: {
        gruntfile: {
          src: 'Gruntfile.js'
        },
        lib_test: {
          src: ['lib/**/*.js', 'test/**/*.js']
        }
      },
      nodeunit: {
        files: ['test/**/*_test.js']
      },
      watch: {
        gruntfile: {
          files: '<%= jslint.gruntfile.src %>',
          tasks: ['jslint:gruntfile']
        },
        lib_test: {
          files: '<%= jslint.lib_test.src %>',
          tasks: ['jslint:lib_test', 'nodeunit']
        }
      }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['jslint', 'nodeunit', 'concat', 'uglify']);

  };
}());
