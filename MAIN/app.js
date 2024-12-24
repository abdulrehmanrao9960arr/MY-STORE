// const products = [
//     // Clothes
//     { category: 'clothes', name: 'T-Shirt', price: 19.99, image: 'https://via.placeholder.com/150?text=T-Shirt' },
//     { category: 'clothes', name: 'Jeans', price: 49.99, image: 'https://via.placeholder.com/150?text=Jeans' },
//     { category: 'clothes', name: 'Jacket', price: 89.99, image: 'https://via.placeholder.com/150?text=Jacket' },
//     { category: 'clothes', name: 'Sweater', price: 39.99, image: 'https://via.placeholder.com/150?text=Sweater' },
//     { category: 'clothes', name: 'Shorts', price: 29.99, image: 'https://via.placeholder.com/150?text=Shorts' },
//     { category: 'clothes', name: 'Coat', price: 99.99, image: 'https://via.placeholder.com/150?text=Coat' },

//     // Phones
//     { category: 'phones', name: 'Smartphone A', price: 699.99, image: 'https://via.placeholder.com/150?text=Smartphone+A' },
//     { category: 'phones', name: 'Smartphone B', price: 799.99, image: 'https://via.placeholder.com/150?text=Smartphone+B' },
//     { category: 'phones', name: 'Smartphone C', price: 599.99, image: 'https://via.placeholder.com/150?text=Smartphone+C' },
//     { category: 'phones', name: 'Smartphone D', price: 499.99, image: 'https://via.placeholder.com/150?text=Smartphone+D' },
// ,

//     // Toys
//     { category: 'toys', name: 'Action Figure', price: 14.99, image: 'https://via.placeholder.com/150?text=Action+Figure' },
//     { category: 'toys', name: 'Doll', price: 19.99, image: 'https://via.placeholder.com/150?text=Doll' },
//     { category: 'toys', name: 'Puzzle', price: 9.99, image: 'https://via.placeholder.com/150?text=Puzzle' },
//     { category: 'toys', name: 'Board Game', price: 29.99, image: 'https://via.placeholder.com/150?text=Board+Game' },
//     { category: 'toys', name: 'Building Blocks', price: 24.99, image: 'https://via.placeholder.com/150?text=Building+Blocks' },
//     { category: 'toys', name: 'Remote Control Car', price: 39.99, image: 'https://via.placeholder.com/150?text=Remote+Control+Car' },
//     { category: 'toys', name: 'Stuffed Animal', price: 29.99, image: 'https://via.placeholder.com/150?text=Stuffed+Animal' },

// ];
// // console.log(products);

// const div = document.querySelector(".div");

// products.map((item , index) => {
//     div.innerHTML += `
//     <div class="card" >
//   <ul class="list">
//       <li><img src="${item.image}" alt="" srcset=""></li>
//       <li><h1>NAME : ${item.name}</h1></li>
//       <li><h1>Category: ${item.category}</h1></li>
//       <li><h1>Price: ${item.price}$</h1></li>
//       <button onclick="addToCart(${index})">ADD TO CART</button>
// </div>
//   `})
// // display done 

//   let cartItem =[];
//   const checkDataFromLocalStorage = JSON.parse(localStorage.getItem("carts"));
//   if (checkDataFromLocalStorage === null) {
//     cartItem = []; // Use assignment
// } else {
//     cartItem = [...checkDataFromLocalStorage]; // Use assignment
// }
  

// function addToCart(index) {
//   const existingItemIndex = cartItem.findIndex(item => item.name === products[index].name);
//   if (existingItemIndex === -1) {
//       products[index].quantity = 1;
//       cartItem.push(products[index]);
//   } else {
//       cartItem[existingItemIndex].quantity += 1; 
//   }
//   console.log(cartItem);
// }



//   function cart(){
//    let newarr = JSON.parse(localStorage.getItem("carts"))
//    cartItem.push(newarr)
//     const arrintostring = JSON.stringify(cartItem)
//     localStorage.setItem("carts" , arrintostring)
//     window.location="../CARTS/cart.html"
//   }

//  const cartss =localStorage.getItem("carts")
//  const carts = JSON.parse(cartss)
// console.log(carts);

   
  
  


















// app.js

const products = [
  // Clothes
  { category: 'clothes', name: 'T-Shirt', price: 19.99, image: 'https://via.placeholder.com/150?text=T-Shirt' },
  { category: 'clothes', name: 'Jeans', price: 49.99, image: 'https://via.placeholder.com/150?text=Jeans' },
  { category: 'clothes', name: 'Jacket', price: 89.99, image: 'https://via.placeholder.com/150?text=Jacket' },
  { category: 'clothes', name: 'Sweater', price: 39.99, image: 'https://via.placeholder.com/150?text=Sweater' },
  { category: 'clothes', name: 'Shorts', price: 29.99, image: 'https://via.placeholder.com/150?text=Shorts' },
  { category: 'clothes', name: 'Coat', price: 99.99, image: 'https://via.placeholder.com/150?text=Coat' },

  // Phones
  { category: 'phones', name: 'Smartphone A', price: 699.99, image: 'https://via.placeholder.com/150?text=Smartphone+A' },
  { category: 'phones', name: 'Smartphone B', price: 799.99, image: 'https://via.placeholder.com/150?text=Smartphone+B' },
  { category: 'phones', name: 'Smartphone C', price: 599.99, image: 'https://via.placeholder.com/150?text=Smartphone+C' },
  { category: 'phones', name: 'Smartphone D', price: 499.99, image: 'https://via.placeholder.com/150?text=Smartphone+D' },

  // Toys
  { category: 'toys', name: 'Action Figure', price: 14.99, image: 'https://via.placeholder.com/150?text=Action+Figure' },
  { category: 'toys', name: 'Doll', price: 19.99, image: 'https://via.placeholder.com/150?text=Doll' },
  { category: 'toys', name: 'Puzzle', price: 9.99, image: 'https://via.placeholder.com/150?text=Puzzle' },
  { category: 'toys', name: 'Board Game', price: 29.99, image: 'https://via.placeholder.com/150?text=Board+Game' },
  { category: 'toys', name: 'Building Blocks', price: 24.99, image: 'https://via.placeholder.com/150?text=Building+Blocks' },
  { category: 'toys', name: 'Remote Control Car', price: 39.99, image: 'https://via.placeholder.com/150?text=Remote+Control+Car' },
  { category: 'toys', name: 'Stuffed Animal', price: 29.99, image: 'https://via.placeholder.com/150?text=Stuffed+Animal' },
];

const div = document.querySelector(".div");

// Display products
products.forEach((item, index) => {
  div.innerHTML += `
  <div class="card">
      <ul class="list">
          <li><img src="${item.image}" alt=""></li>
          <li><h1>NAME : ${item.name}</h1></li>
          <li><h1>Category: ${item.category}</h1></li>
          <li><h1>Price: ${item.price}$</h1></li>
          <li><button onclick="addToCart(${index})">ADD TO CART</button></li>
      </ul>
  </div>
  `;
});

// Initialize cartItem
let cartItem = JSON.parse(localStorage.getItem("carts")) || [];

// Function to add items to the cart
function addToCart(index) {
  const existingItemIndex = cartItem.findIndex(item => item.name === products[index].name);
  if (existingItemIndex === -1) {
      products[index].quantity = 1;
      cartItem.push(products[index]);
  } else {
      cartItem[existingItemIndex].quantity += 1; 
  }
  localStorage.setItem("carts", JSON.stringify(cartItem)); // Save cartItem to localStorage ```javascript
}

// Function to navigate to the cart page
function goToCart() {
  window.location = "../CARTS/cart.html";
}