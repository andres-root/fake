define(function (){
	'use strict';
	function Hello(name) {
		this.message = "Hello " + name + "!";
	}
	Hello.prototype = {};
	Hello.prototype.constructor = Hello;
	return Hello;
});