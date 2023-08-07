red = document.querySelector("#red");
green = document.querySelector("#green");
blue = document.querySelector("#blue");
body = document.querySelector("body");

red.addEventListener("mouseover", function(){

	green.style.backgroundColor = "green";
	blue.style.backgroundColor = "blue";
	
	body.style.backgroundColor = "red";
	red.style.backgroundColor = "white";
});
green.addEventListener("mouseover", function(){

	blue.style.backgroundColor = "blue";
	red.style.backgroundColor = "red";
	
	body.style.backgroundColor = "green";
	green.style.backgroundColor = "white";
});
blue.addEventListener("mouseover", function(){

	green.style.backgroundColor = "green";
	red.style.backgroundColor = "red";

	body.style.backgroundColor = "blue";
	blue.style.backgroundColor = "white";
});
