users = {
	"Roach": "burninate"
};

function redirect(url) {
	window.location = url;
}

function change_url(new_url) {
	var state = {};
	var title = "Creator";
	history.pushState(state, title, new_url);
}

function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username in users && users[username] === password) {
		//window.location = "creator.html";
		//redirect("creator.html");
		//change_url("/user/" + username);
		redirect("/user/" + username + "/Trogdor/");
	} else {
		window.location = "login.html";
	}
}