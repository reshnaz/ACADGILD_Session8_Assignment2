
// This function stores values entered by user in localStorage to register user.
// The same values will be matched against and validated when the user logs in.
function register(){
	if(document.getElementById('name').value!="" & document.getElementById('email').value!="" & document.getElementById('pwd').value!=""){
		localStorage.setItem("name", document.getElementById('name').value);
		localStorage.setItem("email", document.getElementById('email').value);
		localStorage.setItem("pwd", document.getElementById('pwd').value);
		// This html displays registration successful message to user and then asks to login.
		window.location.href = "success.html";
	}
	else{
		document.getElementById('warning').innerHTML="Please fill in all field values.";
	}
}

// This function validates login details entered by user.
function validate(){
	// IF login credentials are right, redirect to home page.
	if (localStorage.getItem("email")==document.getElementById('emailL').value & localStorage.getItem("pwd")==document.getElementById('pwdL').value) {
		window.location.href = "home.html";
	}
	// ELSE ask user to re-try.
	else{
		document.getElementById('warning').innerHTML="Email or password is invalid. Please try again."
	}
}