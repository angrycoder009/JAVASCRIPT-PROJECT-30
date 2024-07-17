

const calcy =()=>{
    const web = document.getElementById("WEB").value;
    const maths = document.getElementById("MATHS").value;
    const elctronics = document.getElementById("ELECTRONICS").value;
    const biology = document.getElementById("BIOLOGY").value;
    const sum = parseFloat(web) + parseFloat(maths) + parseFloat(elctronics) + parseFloat(biology);
    let grades = "";
    console.log(sum)
    let perc = (sum/400)*100;
    if(perc<=100 && perc>=80){
        grades = 'A';
    } else if(perc<=79 && perc>=60){
        grades = 'B';

    } 
    else if(perc<=59 && perc>=40){
       grades='C'
    }else {
        grades ='F'
    }
    document.getElementById('r1').innerHTML=`WEB PROGRAMMING :${web}`;
    
    document.getElementById('r2').innerHTML=`MATHS  :${maths}`;
    
    document.getElementById('r3').innerHTML=`ELECTRONICS :${elctronics}`;
    
    document.getElementById('r4').innerHTML=`BIOLOGY :${biology}`;
    document.getElementById('showData').innerHTML = `Out of 400 your total marks is ${sum} and your percentage is ${perc}%.<br> 
    your grade is ${grades}.`
}