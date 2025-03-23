document.addEventListener("DOMContentLoaded", function () {
    renderRestaurantMenu();
});

function toggleNavBar() {
    
    let navbar = document.getElementById("links");
    navbar.classList.toggle("visible");
}

function toggleCart() {
    let cart = document.getElementById("cart-contents");
    cart.classList.toggle("visible");
}

function renderRestaurantMenu() {

    let restaurantMenu = document.getElementById("restaurant-menu");
    for (let i = 0; i < pizzas.length; i++) {
        let pizza = pizzas[i]
        restaurantMenu.innerHTML += pizzaItem(pizza);
    }
}