let body = document.querySelector("body");

let mainSection = document.querySelector("main");
let dropdowns = document.querySelectorAll(".dropdown");
let products = document.querySelectorAll(".product");
let productNames = document.querySelectorAll(".name");
let productBodies = document.querySelectorAll(".body");
let productImg = document.querySelectorAll(".body img");
let productPrice = document.querySelectorAll(".body h2");
let quantityInputs = document.querySelectorAll(".quantity-input");

let increaseButtons = document.querySelectorAll(".fa-plus");
let decreaseButtons = document.querySelectorAll(".fa-minus");
let showCartButton = document.querySelector(".fa-cart-shopping");
let hideCartButton = document.querySelector(".fa-xmark");
let addCartButtons = document.querySelectorAll(".btn-add-cart");

let backgrounds = document.querySelectorAll(".bg img");

let cart = document.querySelector(".cart");

let lightboxBackground = document.querySelector(".lightbox-bg");

dropdowns.forEach((dropdown) => {
	dropdown.addEventListener("click", (e) => {
		e.preventDefault();
		dropdown.nextElementSibling.classList.toggle("show");
	});
});

productNames.forEach((name, i) => {
	name.addEventListener("click", (e) => {
		name.querySelector("i").classList.toggle("active");
		productBodies[i].classList.toggle("show");
	});
});

// increase and decrease buttons for each product

increaseButtons.forEach((button, i) =>
	button.addEventListener("click", (e) => {
		quantityInputs[i].value++;
	})
);

decreaseButtons.forEach((button, i) =>
	button.addEventListener("click", (e) => {
		if (quantityInputs[i].value > 1) quantityInputs[i].value--;
	})
);

showCartButton.addEventListener("click", (e) => {
	[cart, lightboxBackground].forEach((element) =>
		element.classList.add("show")
	);
});

hideCartButton.addEventListener("click", (e) => {
	[cart, lightboxBackground].forEach((element) =>
		element.classList.remove("show")
	);
});

addCartButtons.forEach((button, i) => {
	button.addEventListener("click", (e) => {
		let name = productNames[i].querySelector("h2").innerHTML;
		let imgSrc = productImg[i].src;
		let price = parseInt(productPrice[i].getAttribute("data-price"));
		let quantity = parseInt(quantityInputs[i].value);

		addCart(name, imgSrc, price, quantity);
		localStorage.setItem("cart", cart.innerHTML);
	});
});

function addCart(name, imgSrc, price, quantity) {
	let cartRow = document.createElement("div");
	let nameSamples = cart.querySelectorAll(".cart-item-name");
	cartRow.classList.add("cart-row");

	for (let i = 0; i < nameSamples.length; i++) {
		if (nameSamples[i].innerHTML == name) {
			alert("Sản phẩm này đã có trong giỏ hàng");
			return;
		}
	}
	cartRowContent = `
		<img class="cart-preview-image" src="${imgSrc}" alt="" />
		<div>
			<h1 class="cart-item-name">${name}</h1>
			<p class="cart-item-price">${
				price + " x " + quantity + " = " + price * quantity + "đ"
			}</p>
		</div>
		<button class="cart-btn btn btn-primary">Xóa</button>`;
	cartRow.innerHTML = cartRowContent;
	cart.appendChild(cartRow);
}

body.setAttribute(
	"data-body-color",
	localStorage.getItem("background color") || "default"
);
