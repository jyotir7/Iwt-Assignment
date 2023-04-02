function getGreeting() {
	let name = prompt("What's your name?");

	if (name != null && name != "") {
		let today = new Date();
		let hour = today.getHours();

		if (hour < 12) {
			return "Good morning, " + name + "!";
		} else if (hour < 18) {
			return "Good afternoon, " + name + "!";
		} else {
			return "Good evening, " + name + "!";
		}
	}
}

let greeting = document.getElementById("greeting");
greeting.innerHTML = getGreeting();

greeting.addEventListener("click", function() {
	greeting.style.display = "none";
});
