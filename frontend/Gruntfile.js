grunt.loadNpmTasks('grunt-contrib-concat');

export default function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
            separator: ';',
            },
            dist: {
            src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
            dest: 'dist/built.js',
            },
        },
        sass: {
            dev: {
                options: {
                style: 'expanded',
                compass: true
                },
                files: {
                'src/css/style.css': 'style.scss'
                }
            },
            prod: {
                options: {
                style: 'compressed',
                compass: true
                },
                files: {
                'dist/css/style.css': 'style.scss'
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                jQuery: true
                }
            }
        },
        watch: {
            sass: {
                files: 'src/scss/{,*/}*.{scss,sass}',
                tasks: ['sass:dev']
            }
        },
          uglify: {
            options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
            src: 'src/<%= pkg.name %>.js',
            dest: 'dist/<%= pkg.name %>.min.js'
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    grunt.registerTask('default', ['concat'], ['uglify'], ['sass'], ['sass:dev', 'watch'], ['jshint']);
}