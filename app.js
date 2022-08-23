let dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
	dropdown.addEventListener("click", (e) => {
		e.preventDefault();
		dropdown.nextElementSibling.classList.toggle("show");
	});
});
