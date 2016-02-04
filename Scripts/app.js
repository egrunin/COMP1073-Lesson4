"use strict";

// setup your IIFE (immediatly invoked function expression)
(function(){
	
	console.log("App Started..");
	
	var firstParagraph;
	
	firstParagraph = document.getElementById("firstParagraph")
	
	firstParagraph.innerHTML = "My New Paragraph Data";
	
})();
