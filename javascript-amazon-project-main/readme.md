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


Now , we have to make cart quantity interactive..
to do this,
calaculate the quantity-> we can simply loop through array and add the quantity
put the quantiy on the page ->


yet the problem that we have in code
we are using multitple script tags to run all the js.
problem is naming coflict
    like we have varibale cart in cart.js , and if we go amazon.js create same nave varible it might confilct
    and code does'nt work at all.

    in order to solve  the problem , the feature in js is called module.
    module contains a varibale inside file so it can't cause any conflict

    how to create module???
    create a file.
    don't load file with script tage
    any varibale can inside the file, it will in the file without conflict

    after that one problem occurs not works cart without any access.
    
    Now HOW WE  get varibale out of file??
    to do that :
    Add type = "module" attribute -> allow to get varibles out of the files.
    to Export =>
    to Import =>import {cart} from '../data/cart.js';