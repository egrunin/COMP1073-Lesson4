"use strict";

// setup your IIFE ('immediatly invoked function expression')
(function () {

	console.log("App Started..");
	
	
	// declared a 'named function' way
	function replaceFirstParagraph() {
		console.log("inside replaceFirstParagraph function");
		var firstParagraph;

		firstParagraph = document.getElementById("firstParagraph")

		firstParagraph.innerHTML = "My New Paragraph Data";
	}

	// call the replaceFirstParagraph function
	replaceFirstParagraph();

})();
