let itemAmount = 1;

function addPizza(pizza , index) {
    return `
        <div class="Pizza-Item">
            <div class="item-description">
                <h2> ${pizza.name}: </h2>
                <p> ${pizza.ingredients}</p>
                <p> Price: ${pizza.price} €</p>
            </div>
                <a class="cart-icon" onclick="addToCart(${index})">
                    <i class="material-icons">add_shopping_cart</i>
                </a>  
        </div>`    
}


function addItemToCart(pizza) {
    return `<div class="added-to-cart">
                            <p>${pizza.name}:</p>
                            <div class="item-preis-amount">
                                <div class="cart-icons">
                                      ${removeOneTemplate()} ${itemAmount} ${addOneTemplate()}
                                </div>
                                <span>Price: ${pizza.price} €</span>
                                ${removeItemTemplate()}
                            </div>
                       </div>`
}

function removeOneTemplate() {
    return `<a onclick="">
                    <i class="material-icons cart-icon">remove</i>
                </a> `
}

function addOneTemplate() {
    return `<a onclick="">
                    <i class="material-icons cart-icon">add</i>
                </a> `
}

function removeItemTemplate() {
    return `<a onclick="">
                    <i class="material-icons cart-icon">delete</i>
                </a> `
}