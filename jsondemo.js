
	let user = {
		firstName: "Jonathon",
		lastName:  "Fidiam",
	}

	document.getElementById("step2").innerHTML = JSON.stringify(user);
	let userObj = JSON.parse(JSON.stringify(user));
	document.getElementById("step3").innerHTML = userObj.firstName + " " +
	userObj.lastName;
