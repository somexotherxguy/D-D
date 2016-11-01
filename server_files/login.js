users = {
	"Roach": "burninate"
};

function login() {
	console.log("Entered Login");
	var username = document.getElementById("username").value;
	var char_name = document.getElementById("char_name").value;
	var password = document.getElementById("password").value;
	if (username && username in users && password && users[username] === password && char_name) {
		console.log(username, char_name, password);
		var url = "/user/" + username + "/" + char_name + "/creator.html";
		location.assign(url);
		var account_name = document.getElementById("account_name");
		account_name.innerHTML = username;
	} else {
		location.assign("login.html");
	}
}