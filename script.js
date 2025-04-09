let cartItems = document.getElementById("cart-items-container");
let navbar = document.getElementById("links");
let cart = document.getElementById("cart-contents");
let cartBtn = document.getElementById("sticky-mobile-cart");

function displayPizzas() {
    let restaurantMenu = document.getElementById("restaurant-menu");
    for (let pizza of pizzas) {
        restaurantMenu.innerHTML += addPizza(pizza, pizzas.indexOf(pizza));
    }
}

function renderRestaurantMenu() {
    displayPizzas()
}

function toggleVisibility(toggleItem, event) {
    toggleItem.classList.toggle("visible");
    event.stopPropagation();
}

function toggleEmptyCart() {
    let emptyCart = document.getElementById("empty-cart");
    let cartTotal = document.getElementById("cart-total");
    let cartItemsAmount = cartItems.children.length;

    if (cartItemsAmount === 0) {
        emptyCart.classList.remove("d_none");
        cartTotal.classList.add("d_none");
    } else {
        emptyCart.classList.add("d_none");
        cartTotal.classList.remove("d_none");
        updateTotalPrice();
    }
}

function addToCart(index) {
    
    let pizza = pizzas[index];
    if (pizza.quantity > 0) {
        pizza.quantity++;
        updateCartItem(index);
    } else {
        pizza.quantity = 1;
        cartItems.innerHTML += addItemToCart(pizza, index);
    }
    toggleEmptyCart();
    updateTotalPrice();
}

function removeItem(itemNumber) {
    let pizza = pizzas[itemNumber];
    let addedItem = document.getElementById(`added-item${itemNumber}`);

    pizza.quantity = 0;
    addedItem.remove();
    updateTotalPrice();
    toggleEmptyCart();
}

function addOne(itemNumber) {
    let pizza = pizzas[itemNumber];

    pizza.quantity++;
    updateCartItem(itemNumber);
    updateTotalPrice();
}

function removeOne(itemNumber) {
    let pizza = pizzas[itemNumber];

    if (pizza.quantity > 1) {
        pizza.quantity--;
        updateCartItem(itemNumber);
    } else {
        removeItem(itemNumber);
    }
    updateTotalPrice();
}

function updateCartItem(itemNumber) {
    updateQuantity(itemNumber);
    updateItemPeris(itemNumber);
}

function updateQuantity(itemNumber) {
    let cartIcons = document.getElementById(`cart-icons-${itemNumber}`);

    cartIcons.innerHTML = showQuantity(itemNumber);
}

function updateItemPeris(itemNumber) {
    let pizza = pizzas[itemNumber];
    let itemTotalPreis = (pizza.price * pizza.quantity).toFixed(2);
    let itemPreis = document.getElementById(`item-preis${itemNumber}`);

    itemPreis.textContent = addPreis(itemTotalPreis);
}

function calculateTotal() {
    let total = 0;
    for (let pizza of pizzas) {
        total += pizza.price * pizza.quantity;
    }
    return total.toFixed(2);
}

function updateTotalPrice() {
    let totalPriceElement = document.getElementById("total-price-amount");
    totalPriceElement.innerHTML = calculateTotal() + " €";
}