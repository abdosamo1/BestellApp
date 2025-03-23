
let cart = document.getElementById("cart-contents");

function renderRestaurantMenu() {
    displayPizzas()
}

function toggleNavBar() {
    
    let navbar = document.getElementById("links");
    navbar.classList.toggle("visible");
}

function toggleCart() {
    cart.classList.toggle("visible");
}

function addToCart() {
    cart.classList.add("visible");
    cart.innerHTML += `<div class"added-to-cart">
                            <p></p>
                       </div>`;
}

document.addEventListener("DOMContentLoaded", function () {
    renderRestaurantMenu();
});
