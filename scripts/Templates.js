function addPizza(pizza) {
return `
        <div class="Pizza-Item">
            <div class="item-description">
                <h2> ${pizza.name}: </h2>
                <p> ${pizza.ingredients}</p>
                <p> Price: ${pizza.price} €</p>
            </div>
                <a class="cart-icon" onclick="toggleCart()">
                    <i class="material-icons">add_shopping_cart</i>
                </a>  
        </div>`    
}