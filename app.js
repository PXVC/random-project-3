let body = document.querySelector("body");

let mainSection = document.querySelector("main");
let dropdowns = document.querySelectorAll(".dropdown");

let products = document.querySelectorAll(".product");
let productNames = document.querySelectorAll(".name");
let productBodies = document.querySelectorAll(".body");

let cart = document.querySelector(".cart");
let showCartButton = document.querySelector(".fa-cart-shopping");
let hideCartButton = document.querySelector(".fa-xmark");
let removeItemButton = document.querySelectorAll(".cart-btn");
let purchaseAllButton = document.querySelector(".btn-purchase-all");

let backgrounds = document.querySelectorAll(".bg img");

let lightboxBackground = document.querySelector(".lightbox-bg");

dropdowns.forEach((dropdown) => {
	dropdown.addEventListener("click", (e) => {
		e.preventDefault();
		dropdown.nextElementSibling.classList.toggle("show");
	});
});

productNames.forEach((productName, i) => {
	productName.addEventListener("click", (e) => {
		productName.querySelector("i").classList.toggle("active");
		let showedBody = productBodies[i];

		showedBody.classList.toggle("show");

		showedBody.querySelector(".fa-plus").addEventListener("click", (e) => {
			showedBody.querySelector(".quantity-input").value++;
		});
		showedBody.querySelector(".fa-minus").addEventListener("click", (e) => {
			if (quantityInputs[i].value > 1) quantityInputs[i].value--;
		});

		showedBody.querySelector(".btn-add-cart").addEventListener("click", (e) => {
			let name = productName.querySelector("h2").innerHTML;
			let imgSrc = showedBody.querySelector("img").src;
			let price = parseInt(
				showedBody.querySelector("h2").getAttribute("data-price")
			);
			let quantity = parseInt(
				showedBody.querySelector(".quantity-input").value
			);

			addCart(name, imgSrc, price, quantity);
		});
	});
});

// Show and hide cart buttonsuu

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
	cartRow.querySelector(".cart-btn").addEventListener("click", removeItem);
}

purchaseAllButton.addEventListener("click", removeAllItem);

function removeAllItem() {
	let CartRows = document.querySelectorAll(".cart-row");
	CartRows.forEach((row) => row.remove());
}

function removeItem(e) {
	e.target.parentElement.remove();
}

body.setAttribute(
	"data-body-color",
	localStorage.getItem("background color") || "default"
);
