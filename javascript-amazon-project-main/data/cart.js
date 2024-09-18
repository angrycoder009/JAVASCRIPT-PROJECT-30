 export let cart=[{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2,
   },
   {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1,
   },
   {
    productId :"83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    quantity:2
   }
]
 export function addToCart(productId){
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
}
export function updateCartQuantity(){
    let cartquantity =0;
             cart.forEach((item)=>{
                cartquantity+=item.quantity
             })
             const cartElement =document.querySelector('.js-cart-quantity');
             cartElement.innerHTML =cartquantity;
             console.log(cartquantity)
             console.log(cart);
  }
console.log(cart)