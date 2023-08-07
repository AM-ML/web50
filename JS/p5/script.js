document.querySelector('form').onsubmit = (e) => {
	e.preventDefault();
	
	const task = document.querySelector(".in");

	if (task.value == "") {
		return false;
	}

	let li = document.createElement('li');

	li.innerHTML = task.value;
	li.classList.add("task");

	document.querySelector('.tasks').appendChild(li);
	task.value="";
};
