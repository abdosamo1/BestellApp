let cart = document.getElementById("cart-contents");
let navbar = document.getElementById("links");


function displayPizzas() {
    let restaurantMenu = document.getElementById("restaurant-menu");
    for (let pizzaNumber = 0; pizzaNumber < pizzas.length; pizzaNumber++) {
        let pizza = pizzas[pizzaNumber]
        restaurantMenu.innerHTML += addPizza(pizza, pizzaNumber);
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
    let emptyCart= document.getElementById("empty-cart")
    
    cart.classList.add("visible");
    emptyCart.classList.add("d_none");
    cart.innerHTML += addItemToCart(pizza, index);
}

function removeItem(itemNumber) {
    let addedItem = document.getElementById(`added-item${itemNumber}`);
    addedItem.remove();

    let remainingItems = cart.children.length

    if (remainingItems === 2) {
        let emptyCart = document.getElementById("empty-cart")
        cart.classList.remove("visible");
        emptyCart.classList.remove("d_none");
    }
    
}

function addOne(itemNumber){
    let addedItem = document.getElementById(`added-item${itemNumber}`);

    itemAmount++;
    console.log(itemAmount);
}

function removeOne(itemNumber) {
    let addedItem = document.getElementById(`added-item${itemNumber}`);

    if (itemAmount === 1) {
        removeItem();
    } else {
        itemAmount--;
    }
}