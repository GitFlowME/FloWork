//\/\\isterZik - Brings you GruntFiles like a chomp

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'lib/css',
          src: ['*.css', '*/**.css','!*.min.css'],
          dest: 'dist/css/',
          ext: '.min.css'
        }]
      }
    },

    uglify: {
    my_target: {
      files: [{
          expand: true,
          cwd: 'lib/js',
          src: ['*.js', '!*.min.js'],
          dest: 'dist/js/',
          ext: '.min.js'
      }]
    }
  }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['cssmin', 'uglify']);
};
