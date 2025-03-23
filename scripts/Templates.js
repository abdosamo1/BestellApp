function addPizza(pizza) {
return `
        <div class="Pizza-Item">
            <div class="item-description">
                <h2> ${pizza.name}: </h2>
                <p> ${pizza.ingredients}</p>
                <p> Price: ${pizza.price} €</p>
            </div>
                <a class="cart-icon" onclick="addToCart()">
                    <i class="material-icons">add_shopping_cart</i>
                </a>  
        </div>`    
}

function displayPizzas() {
    let restaurantMenu = document.getElementById("restaurant-menu");
    for (let pizzaNumber = 0; pizzaNumber < pizzas.length; pizzaNumber++) {
        let pizza = pizzas[pizzaNumber]
        restaurantMenu.innerHTML += addPizza(pizza);
    }
}

