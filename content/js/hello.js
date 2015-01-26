define(function (){
	'use strict';
	function sayHello(name) {
		this.message = "Hello " + name + "!";
	}
	sayHello.prototype = {};
	sayHello.prototype.constructor = sayHello;
	return sayHello;
});