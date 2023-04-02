var fontSize = 10; // initial font size
var interval = setInterval(function() {
	var elem = document.getElementById("myText");
	elem.style.fontSize = fontSize + "pt"; // set font size
	fontSize++; // increase font size by 1pt
	elem.style.color = "red"; // set color to red
	if (fontSize >= 50) {
		elem.innerHTML = "TEXT-SHRINKING"; // change text to "TEXT-SHRINKING"
		elem.style.color = "blue"; // set color to blue
	}
	if (fontSize >= 55) {
		fontSize = 5; // reset font size to 5pt
		elem.innerHTML = "TEXT-GROWING"; // change text back to "TEXT-GROWING"
	}
}, 100); // set interval to 100ms
