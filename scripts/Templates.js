function addPizza(pizza, index) {
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

function addItemToCart(item, itemNumber) {
    return `<div class="added-to-cart" id="added-item${itemNumber}">
                            <p>${item.name}:
                                <span id="item-preis${itemNumber}">${addPreis(item.price)}</span>
                            </p>
                            <div class="item-preis-amount">
                                <div id="cart-icons-${itemNumber}" class="cart-icons">
                                    ${showQuantity(itemNumber)} 
                                </div>
                                    ${removeItemBtn(itemNumber)}
                            </div>
                       </div>`
}

function removeOneBtn(itemNumber) {
    return `<a onclick="removeOne(${itemNumber})">
                    <i class="material-icons cart-icon">remove</i>
                </a> `
}

function addOneBtn(itemNumber) {
    return `<a onclick="addOne(${itemNumber})">
                    <i class="material-icons cart-icon">add</i>
                </a> `
}

function removeItemBtn(itemNumber) {
    return `<a onclick="removeItem(${itemNumber})">
               <i class="material-icons cart-icon">delete</i>
            </a> `
}

function showQuantity(itemNumber) {
    let pizza = pizzas[itemNumber];
    return ` ${removeOneBtn(itemNumber)} 
             ${pizza.quantity}
             ${addOneBtn(itemNumber)}`
}

function addPreis(preis) {
    return `${preis} €`
}