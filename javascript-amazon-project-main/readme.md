To add product in a cart ,
 we can do simply push object 
 but how do we know which product is to add ??

 to solve this , we can use another html attribute:
        data attribute ->allows us to attach any information  to an element.
        eg :  data-product-name='${product.name}'

 to access on js -> we use propertey called dataset    
 Now we can push into array as object into it.


Now problem is when we want to add same quatity over ad over it get another object but we want 
to just change the quantity of caart.

to resolve this,
   step1: check if a product is already in a cart.
   step2 :if it's in the cart , just increase the quantity.

  step3 : if it's not in the cart , add to the cart.