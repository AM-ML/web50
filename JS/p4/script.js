const h = document.querySelector(".h");

document.querySelector(".f").onsubmit = function(e){
	e.preventDefault();

	let i = document.querySelector(".i").value;
	
	h.innerHTML = `Hello, ${i}.`;
	i.style.display = 'none';

};

