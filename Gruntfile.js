/*global module, require */
module.exports = function (grunt) {
    "use strict";
    
	require('grunt-springroll')(grunt);
	
	// Override-able tasks for adding to the build
	grunt.registerTask('_pre-build', []);
	grunt.registerTask('_post-build', []);
	grunt.registerTask('_pre-build-debug', []);
	grunt.registerTask('_post-build-debug', []);
};