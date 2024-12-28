  // const div = document.querySelector(".div");
  // let cartItem = JSON.parse(localStorage.getItem("carts")) || [];
  // // Function to render the cart items
  // function renderCart() {
  //     div.innerHTML = ''; // Clear the div before rendering
  //     cartItem.forEach((item, index) => {
  //         div.innerHTML += `
  //         <div class="card">
  //         <ul class="list">
  //                 <li><img class="imgList" src="${item.thumbnail}" alt=""></li>
  //                 <li><h1>NAME : ${item.title}</h1></li>
  //                 <li><h1>Category: ${item.category}</h1></li>
  //                 <li><h1>Price: ${item.price.toFixed(2)}$</h1></li><br>
  //                 <li><button onclick="changeQuantity(${index}, -1)">-</button>
  //                     <span>${item.quantity}</span>
  //                     <button onclick="changeQuantity(${index}, 1)">+</button>
  //                 </li><br>
  //                 <li><button onclick="deletes(${index})">Delete</button></li>
  //             </ul>
  //             </ul>
  //             </div>  
  //         `;
  //     });
  // }
  // // Function to change the quantity of an item
  // function changeQuantity(index, change) {
  //     if (change === -1 && cartItem[index].quantity > 1) {
  //         cartItem[index].quantity -= 1; // Decrease quantity
  //     } else if (change === 1) {
  //         cartItem[index].quantity += 1; // Increase quantity
  //     }
  //     localStorage.setItem("carts", JSON.stringify(cartItem)); // Update localStorage
  //     renderCart(); // Re-render the cart
  // }

  // // Function to delete an item from the cart
  // function deletes(index) {
  //     cartItem.splice(index, 1); // Remove the item from the array
  //     localStorage.setItem("carts", JSON.stringify(cartItem)); // Update localStorage
  //     renderCart(); // Re-render the cart
  //     const swalWithBootstrapButtons = Swal.mixin({
  //         customClass: {
  //           confirmButton: "btn btn-success",
  //           cancelButton: "btn btn-danger"
  //         },
  //         buttonsStyling: false
  //       });
  //       swalWithBootstrapButtons.fire({
  //         title: "Are you sure?",
  //         text: "You want to delete this item?",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonText: "Yes, delete it!",
  //         cancelButtonText: "No, cancel!",
  //         reverseButtons: true
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           swalWithBootstrapButtons.fire({
  //             title: "Deleted!",
  //             text: "Your item has been deleted.",
  //           });
  //         } else if (
  //           /* Read more about handling dismissals below */
  //           result.dismiss === Swal.DismissReason.cancel
  //         ) {
  //           swalWithBootstrapButtons.fire({
  //             title: "Cancelled",
  //             text: "Your item is safe :)",
  //             icon: "error"
  //           });
  //         }
  //       });

      


  // }
  // // Function to navigate back to the home page
  // function more() {
  //     window.location = "../MAIN/index.html";
  // }
  // const totalPrice = document.querySelector(".transaction")

  // const totalfunc =()=>{
  //   const totalPrices = cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
  //   const totalItem = cartItem.reduce((acc, item) => acc + item.quantity, 0);
  //   totalPrice.innerHTML =`
  //   <button class="btn-primary tran-btn" onclick="more()">ORDER MORE</button>
  //                 <div class="border p-3 rounded">
  
  //                     <h5 class="d-flex justify-content-between">
  // <h5>Order Summary</h5>
  // <h5>Total Item : ${totalItem}</h5>
  // <span>Total Price:</span>
  // <span id="total-price">$${totalPrices}</span></h5>
  // <button class="w-100 mt-3 tran-btn">Proceed to Checkout</button>
  // </div>
  // </div>
  // </div>
  //   `}
  //   totalfunc();
  // // Initial render of the cart
  // renderCart();
















  const div = document.querySelector(".div");
  let cartItem = JSON.parse(localStorage.getItem("carts")) || [];
  
  // Function to render the cart items
  function renderCart() {
      div.innerHTML = ''; // Clear the div before rendering
      cartItem.forEach((item, index) => {
          div.innerHTML += `
          <div class="card">
              <ul class="list">
                  <li><img class="imgList" src="${item.thumbnail}" alt=""></li>
                  <li><h1>NAME : ${item.title}</h1></li>
                  <li><h1>Category: ${item.category}</h1></li>
                  <li><h1>Price: ${item.price.toFixed(2)}$</h1></li><br>
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
      totalfunc(); // Update total after quantity change
  }
  
  // Function to delete an item from the cart
  function deletes(index) {
      const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
          },
          buttonsStyling: false
      });
  
      swalWithBootstrapButtons.fire({
          title: "Are you sure?",
          text: "You want to delete this item?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true
      }).then((result) => {
          if (result.isConfirmed) {
              cartItem.splice(index, 1); // Remove the item from the array
              localStorage.setItem("carts", JSON.stringify(cartItem)); // Update localStorage
              renderCart(); // Re-render the cart
              totalfunc(); // Update total after deletion
  
              swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your item has been deleted.",
              });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire({
                  title: "Cancelled",
                  text: "Your item is safe :)",
                  icon: "error"
              });
          }
      });
  }
  
  // Function to navigate back to the home page
  function more() {
      window.location = "../MAIN/index.html";
  }
  
  const totalPrice = document.querySelector(".transaction");
  
  const totalfunc = () => {
      const totalPrices = cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const totalItem = cartItem.reduce((acc, item) => acc + item.quantity, 0);
      totalPrice.innerHTML = `
          <button class="btn-primary tran-btn" onclick="more()">ORDER MORE</button>
          <div class="border p-3 rounded">
              <h5 class="d-flex justify-content-between">
                  <h5>Order Summary</h5>
                  <h5>Total Item : ${totalItem}</h5>
                  <span>Total Price:</span>
                  <span id="total-price">$${totalPrices.toFixed(2)}</span>
              </h5>
              <button class="w-100 mt-3 tran-btn">Proceed to Checkout</button>
          </div>
      `;
  };
  
  // Initial render of the cart
  renderCart();
  totalfunc(); // Call to display the initial total