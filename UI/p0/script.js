document.querySelector(".a").onclick = function(){
	document.querySelectorAll("div").forEach(div => {
		div.style.display="none";
	});
	document.querySelector(".p1").style.display="block";
}
document.querySelector(".b").onclick = function(){
	document.querySelectorAll("div").forEach(div => {
		div.style.display="none";
	});
	document.querySelector(".p2").style.display="block";
}
document.querySelector(".c").onclick = function(){
	document.querySelectorAll("div").forEach(div => {
		div.style.display="none";
	});
	document.querySelector(".p3").style.display="block";
}
