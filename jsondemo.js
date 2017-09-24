

$( document ).ready(function() {
	let user = {
		firstName: "Jonathon",
		lastName:  "Fidiam",
	};
	
	document.getElementById("step2").innerHTML = JSON.stringify(user);
	document.getElementById("step3").innerHTML = user;
});


	

