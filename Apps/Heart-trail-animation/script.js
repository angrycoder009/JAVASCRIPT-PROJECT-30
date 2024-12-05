const bodyElement = document.querySelector("body");

//event lister on mousemove
bodyElement.addEventListener('mousemove',(event)=>{

 //move position on x 
  const moveX = event.offsetX;
  //move positon on  y
  const moveY = event.offsetY;
  //get span eleent
  const span = document.createElement('span');
  
  //style span 
  span.style.left = moveX +'px';
  span.style.top =moveY +'px';
  //adding span to body
  bodyElement.append(span)
 

  setTimeout(()=>{
    bodyElement.remove();
  },30000)

  //selecting changes on size
  const size = Math.random()*100;
  span.style.width = size +'px';
  span.style.height =size +'px';
  
})