if (!localStorage.getItem("counter")){
	localStorage.setItem("counter", 0);
}

let h = document.querySelector(".h");
let btn = document.querySelector(".btn");

counter = localStorage.getItem("counter")

document.addEventListener("DOMContentLoaded", () => {
	h.innerHTML = counter;
});
btn.addEventListener("click", () => {
	counter++;
	localStorage.setItem("counter", counter);
	h.innerHTML = counter;
});



