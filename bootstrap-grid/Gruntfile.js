module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            css: {
                files: '**/*.less',
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        }, 

        less: {
            development: {
//                options: {
//                    paths: ['node_modules/bootstrap/less']
//                },
                files: {
                    'css/app.css': 'css/app.less'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['less']);
}
