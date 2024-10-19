import {cart,addToCart,updateCartQuantity,showCartAdded} from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';
 
//creating a varaible to store the product data
let storeHtml = ''
//loop throght daata product to put in each elemnt of html
products.forEach((product)=>{

    const html = `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-45.png">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class = "js-quantity-selector-${product.id}">
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

          <div class="added-to-cart js-added-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

      <button 
  class="add-to-cart-button button-primary js-add-to-cart"
  data-product-id="${product.id}"
>
  Add to Cart
</button>

        </div>
    `
    storeHtml+=html
});
document.querySelector('.products-grid').innerHTML =storeHtml 


//we are make add to cart interactive
//add event listers in all add to cart button
document.querySelectorAll('.js-add-to-cart')
  .forEach((button)=>{
    button.addEventListener('click',()=>{
     //to get product name by data attribute in button element 
     //we use dataset propertry
   const productId =button.dataset.productId;
   addToCart(productId);
   showCartAdded(productId);
   updateCartQuantity();
   
  
   console.log(cart)
    });

   
    
})


