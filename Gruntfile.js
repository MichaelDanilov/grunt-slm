module.exports = function(grunt) {

	grunt.initConfig({
		clean: {
			tests: ['tmp']
		},

		slm: {
			options: {
				basePath: __dirname + '/src',
				data: {
					author: 'Jane Doe',
					year: 2016,
					items: [
						{
							name: 'milk',
							price: '$1',
						},
						{
							name: 'bread',
							price: '$3',
						}
					]
				}
			},

			simple: {
				src: 'test/test-simple.slm',
				dest: 'tmp/test-simple.html'
			},

			variables: {
				src: 'test/test-variables.slm',
				dest: 'tmp/test-variables.html'
			},

			partial: {
				src: 'test/test-partial.slm',
				dest: 'tmp/test-partial.html'
			},
		},
		nodeunit: {
			tests: ['test/test.js']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.registerTask('test', ['clean', 'slm', 'nodeunit']);
	grunt.registerTask('default', ['test']);

};
