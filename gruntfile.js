module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    jshint: {
      files: ['gruntfile.js', 'app/js/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },

    concat: {
      options: {
        separator: '\n// next file:\n'
      },
      dist: {
        src: ['app/js/**/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/<%= pkg.name %>.min.css': ['app/css/app.css']
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/partials/login.html': 'app/partials/login.html',
          'dist/partials/register.html': 'app/partials/register.html',
          'dist/partials/student-form.html': 'app/partials/student-form.html',
          'dist/partials/coach-findings.html': 'app/partials/coach-findings.html'
        }
      }
    },

    watch: {
      app: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'htmlmin']);

};
