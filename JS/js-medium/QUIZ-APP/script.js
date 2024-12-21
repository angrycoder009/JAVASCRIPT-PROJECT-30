const start_btn = document.querySelector('.start_btn');
const info_box = document.querySelector('.info_box');
const exit_quiz_btn = document.querySelector('.quit');
const  continue_quiz_btn = document.querySelector('.restart')
const quiz_box_btn = document.querySelector('.quiz_box')
start_btn.addEventListener('click',()=>{
    info_box.classList.add('active_info')
    start_btn.classList.add('info_box')
    console.log('hi')
})

exit_quiz_btn.addEventListener('click',()=>{
    info_box.classList.remove('active_info')
    start_btn.classList.remove('info_box')
})

continue_quiz_btn.addEventListener('click',()=>{
  quiz_box_btn.classList.add('active_info')
  info_box.classList.remove('active_info')
})