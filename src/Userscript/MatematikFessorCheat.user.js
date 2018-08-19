// ==UserScript==
// @name         MatematikFessor Correct Answers
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Cheat on the MatematikFessor website.
// @author       You
// @match        https://www.matematikfessor.dk/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("Loaded MatematikFessor Cheats X --Proof-of-Work--")
	  XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
	  XMLHttpRequest.prototype.send = function(value) {
		this.addEventListener("load", function(){
			if(JSON.parse(this.responseText).data.saved.UserAnswer.correct){
				alert("Rigtigt svar");
			}
		}, false);
		this.realSend(value);
	};
})();
