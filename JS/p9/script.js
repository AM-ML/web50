document.querySelector("form").onsubmit = function(e){
	e.preventDefault();

	fetch('https://v6.exchangerate-api.com/v6/ba3351ef1027d98e6a8ebc27/latest/USD')

	.then(response => response.json())

	.then(data => {

		let cu = document.querySelector(".input").value.toUpperCase();
		const rate = data.conversion_rates[cu];
		let h = document.querySelector(".h");
		if (rate != undefined) {
			let b = document.querySelector(".b");
			b.innerHTML = `1 USD => ${rate.toFixed(2)} ${cu}`;	
		}
		h.style.display='inline-block';
		
});};



