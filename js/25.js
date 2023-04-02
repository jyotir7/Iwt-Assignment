function validateForm() {
	var firstName = document.forms["registrationForm"]["firstName"].value;
	var lastName = document.forms["registrationForm"]["lastName"].value;
	var userID = document.forms["registrationForm"]["userID"].value;
	var password = document.forms["registrationForm"]["password"].value;
	var confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;
	var address = document.forms["registrationForm"]["address"].value;
	var email = document.forms["registrationForm"]["email"].value;
	var contactNumber = document.forms["registrationForm"]["contactNumber"].value;

	if (firstName == "") {
		alert("Please enter your first name.");
		return false;
	}
	if (lastName == "") {
		alert("Please enter your last name.");
		return false;
	}
	if (userID == "") {
		alert("Please enter a user ID.");
		return false;
	}
}
