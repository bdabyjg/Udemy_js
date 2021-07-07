'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);
const openModal = function (){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for(let i = 0; i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click',openModal);
}

//关闭弹窗的操作--通过操控对应的标签“是否显示”来关闭窗口,“hidden"这个标签来控制
btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

//keyboard event -- 按Esc就可以关闭窗口
document.addEventListener('keydown',function (e){
    console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('.hidden')){
        closeModal();
    }
});


