'use strict';

var grunt = require('grunt');
var path = require('path');

var read = function() {
  var filepath = path.join.apply(this, Array.prototype.slice.call(arguments));
  return grunt.util.normalizelf(grunt.file.read(filepath));
};

exports.slm = {
	simple: function(test) {
		var actual = read('tmp', 'test-simple.html');
		var expected = read('test', 'test-simple.html');

		test.strictEqual(actual, expected, 'files should be equal');
		test.done();
	},

	variables: function(test) {
		var actual = read('tmp', 'test-variables.html');
		var expected = read('test', 'test-variables.html');

		test.strictEqual(actual, expected, 'files should be equal');
		test.done();
	},

	partial: function(test) {
		var actual = read('tmp', 'test-partial.html');
		var expected = read('test', 'test-partial.html');

		test.strictEqual(actual, expected, 'files should be equal');
		test.done();
	},
};
