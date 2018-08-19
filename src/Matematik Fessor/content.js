console.log("Loading MatematikFessor")
$(document).ready(function () {
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
});