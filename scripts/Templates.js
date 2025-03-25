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


function addItemToCart(item , itemNumber) {
    return `<div class="added-to-cart" id="added-item${itemNumber}">
                            <p>${item.name}:</p>
                            <div class="item-preis-amount">
                                <div class="cart-icons">
                                      ${removeOneTemplate()} ${itemAmount} ${addOneTemplate()}
                                </div>
                                <span>Price: ${item.price} €</span>
                                ${removeItemTemplate(itemNumber)}
                            </div>
                       </div>`
}

function removeOneTemplate(itemNumber) {
    return `<a onclick="removeOne(${itemNumber})">
                    <i class="material-icons cart-icon">remove</i>
                </a> `
}

function addOneTemplate(itemNumber) {
    return `<a onclick="addOne(${itemNumber})">
                    <i class="material-icons cart-icon">add</i>
                </a> `
}

function removeItemTemplate(itemNumber) {
    return `<a onclick="removeItem(${itemNumber})">
               <i class="material-icons cart-icon">delete</i>
            </a> `
}