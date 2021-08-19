let text = document.getElementById("text");
let result = document.getElementById("result");

const validation = () => {
	let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	let value = text.value;
	if (value.match(pattern)) {
		result.style.display = "block";
		result.classList.add("valid");
		result.classList.remove("invalid");
		result.innerHTML = "Congrats Email id is valid!!!!!!";
	} else {
		result.style.display = "block";
		result.classList.add("invalid");
		result.classList.remove("valid");
		result.innerHTML = "Sorry Email id is invalid :(";
	}
};
let left = document.getElementById("left");
function responsive() {}
