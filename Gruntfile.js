module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'src/jsUtilityProvider.js',
                    'src/bst.js'
                ],
                dest: 'dist/jsUtilityProvider.js'
            },
            example: {
                src: [
                    'src/jsUtilityProvider.js',
                    'src/bst.js'
                ],
                dest: 'example/jsUtilityProvider.js'
            }
        },
        uglify: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: {
                    "dist/jsUtilityProvider.min.js": ["dist/jsUtilityProvider.js"]
                }

            },
            example: {
                options: {
                    sourceMap: true
                },
                files: {
                    "example/jsUtilityProvider.min.js": ["example/jsUtilityProvider.js"]
                }

            }
        }
    });

    grunt.registerTask('default', ['concat:dist', 'uglify:dist','concat:example', 'uglify:example']);
}