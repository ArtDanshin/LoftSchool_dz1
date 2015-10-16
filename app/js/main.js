$(document).ready(function() {
	if (typeof console === "undefined" || typeof console.log === "undefined") {
     console = {};
     console.log = function() {};
	}
	console.log('Im a hero!');
});