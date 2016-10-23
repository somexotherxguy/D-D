users = {
	"Roach": "burninate"
};

function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username in users && users[username] === password) {
		window.location = "creator.html";
	} else {
		window.location = "login.html";
	}
}