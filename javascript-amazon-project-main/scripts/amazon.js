
//main ideas of javascript
//1. save the data 
//2. generate the html
//3. makes interactive
let productHTML =''
products.forEach((product)=>{
   productHTML =productHTML+ `
         <div class="product-container">
               <div class="product-image-container">
                  <img class="product-image"
                  src="${product.image}">
               </div>

               <div class="product-name limit-text-to-2-lines">
                  ${product.name}</div>

               <div class="product-rating-container">
                  <img class="product-rating-stars"
                  src="images/ratings/rating-${product.rating.stars*10}.png">
                  <div class="product-rating-count link-primary">
                  ${product.rating.count}
                  </div>
               </div>

               <div class="product-price">
                  $${(product.priceCents /100).toFixed(2)}
               </div>

               <div class="product-quantity-container">
                  <select>
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  </select>
               </div>

               <div class="product-spacer"></div>

               <div class="added-to-cart">
                  <img src="images/icons/checkmark.png">
                  Added
               </div>

               <button class="add-to-cart-button button-primary js-add-to-cart-btn" 
               data-product-id='${product.id}'
               >
                  Add to Cart
               </button>
            </div>
   `;
  
})
document.querySelector('.js-products-grid')
            .innerHTML =productHTML;

// function addToCart(){
//    const cartElement =document.querySelectorAll('.js-cart-quantity');
//    cartElement.forEach(cartElement=>{
//       const currentQuantity = Number(cartElement.innerHTML);  // Convert the innerHTML to a number
//       cartElement.innerHTML = currentQuantity + 1;  
//    })
// }

document.querySelectorAll('.js-add-to-cart-btn')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
         
            // Find the item in the cart
            let matchingItem = cart.find(item => item.productId === productId);

            if (matchingItem) {
                // If the item exists, increment the quantity
                matchingItem.quantity += 1;
            } else {
                // If the item does not exist, add it to the cart
                cart.push({
                    productId: productId,
                    quantity: 1
                });
            }
           
           let cartquantity =0;
            cart.forEach((item)=>{
               cartquantity+=item.quantity
            })
            const cartElement =document.querySelector('.js-cart-quantity');
            cartElement.innerHTML =cartquantity;
            console.log(cartquantity)
            console.log(cart);
        });
    });         

