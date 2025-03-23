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
        restaurantMenu.innerHTML += `
        <div class="Pizza-Item">
            <div class="item-description">
                <h2> ${pizza.name}: </h2>
                <p> ${pizza.ingredients}</p>
                <p> Price: ${pizza.price} €</p>
            </div>
                <a class="cart-icon" onclick="toggleCart()">
                    <i class="material-icons">add_shopping_cart</i>
                </a>  
        </div>`;
    }
}