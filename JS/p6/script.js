i = 0;
counter = document.querySelector(".counter");
btn = document.querySelector(".btn");

function increment(){
	i += 1;
	counter.innerHTML = i;
}
btn.addEventListener("click", () => {
	setInterval(increment, 100);
});

