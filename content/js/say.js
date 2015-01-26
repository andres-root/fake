define(function (require) {
	'use strict';
	var Hello = require('hello');
	var exports = require('exports');
	function create(name){
		return new Hello(name);
	}
	exports.create = create;
});