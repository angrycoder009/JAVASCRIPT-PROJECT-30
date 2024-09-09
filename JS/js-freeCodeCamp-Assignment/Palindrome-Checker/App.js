
function checkPalindrome(){
    const word = document.querySelector('.text').value.trim();
   let revWord =''
  for(let i = word.length-1;i>=0;i--){
    revWord +=word[i]
  }
  if (word === revWord && word !== '') {
    document.getElementById('result').textContent =`${word} is a palindrome`;
} else {
    document.getElementById('result').textContent = `${word} is not palindrome`;
}
 
}
