const basket1Apple1 =document.querySelector('.basket-1 span')

const basket1Apple2 =document.querySelector('.basket-2 span')
const totalApple = 10
basket1Apple1.innerHTML =totalApple
let secondBasketApple = 0
let firstBasketApple= totalApple -secondBasketApple

document.querySelector('.js-btn-basket-2').addEventListener('click',()=>{
    if(firstBasketApple>0){
        secondBasketApple++
        basket1Apple1.innerHTML = secondBasketApple
        firstBasketApple--
        basket1Apple2.innerHTML =firstBasketApple
    }
 
})

document.querySelector('.js-btn-basket-1').addEventListener('click',()=>{
    if(secondBasketApple>0){
        secondBasketApple--
        basket1Apple1.innerHTML = secondBasketApple
        firstBasketApple++
        basket1Apple2.innerHTML =firstBasketApple
    }
 console.log('first basket btn')
})


