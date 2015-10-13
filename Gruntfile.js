/**
 *
 */

module.exports = function(grunt) {

    var timestamp = new Date().getTime() + "";

    grunt.option("js_prod", js_prod);
    grunt.option("css_prod", css_prod);
    grunt.option("timestamp", timestamp);

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['src/*.js'],
                tasks: ['js-task']
            },
            css: {
                files: ['src/*.css'],
                tasks: ['css-task']
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            my_target: {
                files: {
                    'dist/simple-tags.min.js' : ['src/simple-tags.js']
                }
            }
        },
        cssmin: {
            options: {
              shorthandCompacting: false
           },
           plugin: {
              files: {
                 'dist/simple-tags.min.css': ['src/simple-tags.css']
              }
           }
        }
    });
    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    require('time-grunt')(grunt);
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('js-task', ['uglify']);
    grunt.registerTask('css-task', ['cssmin']);
};
