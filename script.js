let cart = document.getElementById("cart-contents");
let emptyCart = document.getElementById("empty-cart")
let navbar = document.getElementById("links");


function displayPizzas() {
    let restaurantMenu = document.getElementById("restaurant-menu");
    for (let pizzaNumber = 0; pizzaNumber < pizzas.length; pizzaNumber++) {
        let pizza = pizzas[pizzaNumber]
        restaurantMenu.innerHTML += addPizza(pizza , pizzaNumber);
    }
}

function renderRestaurantMenu() {
    displayPizzas()
}

function toggleNavBar() {
    navbar.classList.toggle("visible");
}

function toggleCart() {
    cart.classList.toggle("visible");
}

function addToCart(index) {
    let pizza = pizzas[index];
    cart.classList.add("visible");
    emptyCart.classList.add("d_none");
    cart.innerHTML += addItemToCart(pizza);
}

