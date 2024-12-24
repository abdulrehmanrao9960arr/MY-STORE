// cart.js

const div = document.querySelector(".div");
let cartItem = JSON.parse(localStorage.getItem("carts")) || [];

// Function to render the cart items
function renderCart() {
    div.innerHTML = ''; // Clear the div before rendering
    cartItem.forEach((item, index) => {
        div.innerHTML += `
        <div class="card">
            <ul class="list">
                <li><img src="${item.image}" alt=""></li>
                <li><h1>NAME : ${item.name}</h1></li>
                <li><h1>Category: ${item.category}</h1></li>
                <li><h1>Price: ${item.price}$</h1></li>
                <li>
                    <button onclick="changeQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </li><br>
                <li><button onclick="deletes(${index})">Delete</button></li>
            </ul>
        </div>
        `;
    });
}

// Function to change the quantity of an item
function changeQuantity(index, change) {
    if (change === -1 && cartItem[index].quantity > 1) {
        cartItem[index].quantity -= 1; // Decrease quantity
    } else if (change === 1) {
        cartItem[index].quantity += 1; // Increase quantity
    }
    localStorage.setItem("carts", JSON.stringify(cartItem)); // Update localStorage
    renderCart(); // Re-render the cart
}

// Function to delete an item from the cart
function deletes(index) {
    cartItem.splice(index, 1); // Remove the item from the array
    localStorage.setItem("carts", JSON.stringify(cartItem)); // Update localStorage
    renderCart(); // Re-render the cart
}

// Function to navigate back to the home page
function more() {
    window.location = "../MAIN/index.html";
}

// Initial render of the cart
renderCart();