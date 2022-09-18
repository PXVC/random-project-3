backgrounds.forEach((bg, i) => {
	bg.addEventListener("click", (e) => {
		backgrounds.forEach((bg) => bg.classList.remove("active"));
		bg.classList.add("active");

		body.setAttribute("data-body-color", bg.getAttribute("data-bgcolor"));
		localStorage.setItem("background color", bg.getAttribute("data-bgcolor"));
		localStorage.setItem("color index", i);
	});
});

backgrounds[localStorage.getItem("color index") || 0].classList.add("active");
body.setAttribute(
	"data-body-color",
	localStorage.getItem("background color") || "default"
);
