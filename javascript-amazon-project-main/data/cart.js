 export let cart=[]
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