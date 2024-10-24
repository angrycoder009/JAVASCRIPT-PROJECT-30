import { getData } from "./getData.js";
async function fetchData(){
    const data = await getData();
    const product = data.products
   product.forEach((item)=>{
    console.log(item.images)
   })

}
fetchData()
 