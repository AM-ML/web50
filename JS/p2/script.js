i = 0;
counter = document.querySelector(".counter");
btn = document.querySelector(".btn");

function increment(){
	i += 1;
	if (i % 10 == 0)
		alert(`Count reached ${i}!`)
	counter.innerHTML = i;
}
