export const cart = [{
  productId :"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity :2,
},{
  productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity :1
}];
export function addToCart(productId){
    //loop through a cart to check whether  same element is present or not
      //here we are added select element to add the cart quantity
      const select =Number(document.querySelector(`.js-quantity-selector-${productId}`).value)
    let matchingItem;
    cart.forEach((item)=>{
     //if it is same element already exist
     if(productId ===item.productId){
         //store them in matching item
     matchingItem =item
     }
    })
    if(matchingItem){
     //if it's true in crease by one
     matchingItem.quantity +=1
    } else{
   
     cart.push({
         productId :productId,
         quantity : select
        });
    }
   
   }
 export  function updateCartQuantity(){
    //calculate the quantiy in the caart
    let cartQuantity = 0 
    cart.forEach((item)=>{
        cartQuantity+=item.quantity;
    })
    document.querySelector('.cart-quantity').innerHTML =`${cartQuantity}`
 } 
 
 export function showCartAdded(productId){
    const messageAdded = document.querySelector(`.js-added-cart-${productId}`)
    console.log(messageAdded)
    messageAdded.classList.add('added-to-cart-visible')
    setTimeout(() => {
     messageAdded.classList.remove('added-to-cart-visible');
   }, 1000);
  } 