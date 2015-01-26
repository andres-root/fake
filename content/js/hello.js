define(function (require){
	'use strict';
	var $ = require('jQuery');
	function Hello(name) {
		this.word = $("#word").val();
		this.message = this + name + "!";
	}
	Hello.prototype = {};
	Hello.prototype.constructor = Hello;
	return Hello;
});