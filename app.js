const div = document.querySelector(".div");
// Initialize cartItem
let cartItem = JSON.parse(localStorage.getItem("carts")) || [];
let products = []; // Declare products variable

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((res) => {
    products = res.products; // Assign products here
    products.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <ul class="list">
                <li><img class="imgList" src="${item.thumbnail}" alt=""></li>
                <li><h1>NAME : ${item.title}</h1></li>
                <li><h1>Category: ${item.category}</h1></li>
                <li><h1>Price: ${item.price.toFixed(2)}$</h1></li>
                <li><button onclick="addToCart(${index})">ADD TO CART</button></li>
            </ul>
        `;
        div.appendChild(card); // Append the card to the div
    });
})
.catch((err) => {
    console.log(err);
});

// Function to add items to the cart
function addToCart(index) {
    const existingItemIndex = cartItem.findIndex(item => item.title === products[index].title); // Change name to title
    if (existingItemIndex === -1) {
        products[index].quantity = 1;
        cartItem.push(products[index]);
    } else {
        cartItem[existingItemIndex].quantity += 1; 
    }
    localStorage.setItem("carts", JSON.stringify(cartItem)); // Save cartItem to localStorage
    Swal.fire({
      title: "Product is selecetd!",
      text: "Your item is store in Cart",
    });
}

// Function to navigate to the cart page
function goToCart() {
    window.location = "./CARTS/cart.html";
}