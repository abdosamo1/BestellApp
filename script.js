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
    for (let pizzaNumber = 0; pizzaNumber < pizzas.length; pizzaNumber++) {
        let pizza = pizzas[pizzaNumber]
        restaurantMenu.innerHTML += addPizza(pizza);
    }
}