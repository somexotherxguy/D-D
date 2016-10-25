users = {
	"Roach": "burninate"
};

function login() {
	var username = document.getElementById("username").value;
	var char_name = document.getElementById("char_name").value;
	var password = document.getElementById("password").value;
	if (username in users && users[username] === password) {
		var url = "/user/" + username + "/" + char_name + "/creator.html";
		location.assign(url);
		var account_name = document.getElementById("account_name");
		account_name.innerHTML = username;
		var login_text = document.getElementById("login_text");
		login_text.innerHTML = "Logoff";
	} else {
		location.assign("login.html");
	}
}