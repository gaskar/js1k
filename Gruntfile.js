var mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
       
		connect: {
            server: {
                options: {
                    hostname: '*',
                    tmpdir: '.tmp',
                    port: 3000,
                    middleware: function(connect) {
                        return [
                            function(req, res, next) {
                                res.setHeader('Access-Control-Allow-Origin', '*');
                                res.setHeader('Access-Control-Allow-Headers', '*');
                                res.setHeader('Access-Control-Allow-Credentials', 'true');
                                res.setHeader('X-SERVED-BY', 'Dragon!!!!');
                                next();
                            },
                            mountFolder(connect, 'app')
                        ]
                    }
                }
            }
        },
        uglify: {
            build: {
                options: {
                    mangle: true,
                    beautify: false,
                    compress: true,
                    ascii_only: true
                },
                files: [{
                    dest: 'app/demo.min.js',
                    src: ['app/demo.js']
                }]
            }
        },
        watch: {
            uglify: {
            	files: ['app/demo.js', 'app/index.html'],
            	tasks: ['uglify']
            }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['connect', 'uglify', 'watch']);

}