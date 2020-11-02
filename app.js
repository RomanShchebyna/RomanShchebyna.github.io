$(document).ready(function(){
    $('.slider').slick({

        arrows:true,
        dots:true,


     });
  });


  let productsCountEl= document.getElementById("products-count");
  console.log(productsCountEl);

  let addtocartButtons=document.querySelectorAll(".addtocartButton");
  console.log(addtocartButtons)

for (let i=0; i< addtocartButtons.length; i++){
 addtocartButtons[i].addEventListener("click",function(e)
 { e.preventDefault();
    let count=+productsCountEl.textContent;
    productsCountEl.textContent=count+1;
 })
}
//-----------------------Способ с добавление ID атрибута------------------------------------

// let likes=document.querySelectorAll(".like");
// console.log(likes);
// for( let i=0;i<likes.length;i++){

// likes[i].addEventListener("click",function(){
    
// if (likes[i].getAttribute("id"))
//     {
//         likes[i].removeAttribute("id");

//     } 
//     else {
//         likes[i].setAttribute("id","likes")
//     }
// }
// )
// }

//----------------------Способ с добавление КЛАССА-------------------------------------

// let likes=document.querySelectorAll(".like");
// console.log(likes);
// for( let i=0;i<likes.length;i++){

// likes[i].addEventListener("click",function(){
    
// if (likes[i].classList.contains("likes"))
//     {
//         likes[i].classList.remove("likes");

//     } 
//     else {
//         likes[i].classList.add("likes")
//     }
// }
// )
// }


//-----------------Способ 3  -----= использование вместо remove / add-- togle если класса нет добавляет если есть удаляет.
let likes=document.querySelectorAll(".like");
console.log(likes);
for( let i=0;i<likes.length;i++){

likes[i].addEventListener("click",function(){

        likes[i].classList.toggle("likes")
    
}
)
}


let moredetails= document.querySelectorAll(".more-detailsButton");
console.log(moredetails);
let modal= document.querySelector(".modal");
let closeBtn=document.querySelector(".btn-close")


// Используем forEach для перебора элементов массива

moredetails.forEach(function(btn){
btn.addEventListener("click",OpenModal)
})

function OpenModal(){
   //   e.preventDefault();
   modal.classList.add("show");
   modal.classList.remove("hide")
}

function closeModal(){
   modal.classList.add("hide")
   modal.classList.remove("show")
}
closeBtn.addEventListener("click",closeModal)

modal.addEventListener("click",function(e){
   if(e.target==modal){
      closeModal();
   }
})





// SCroll
 

function showModalByscroll(){
   if(window.pageYOffset > document.documentElement.scrollHeight/2){
    
      OpenModal()
      removeEventListener("scroll",showModalByscroll)
    
   }
}

window.addEventListener("scroll",showModalByscroll)



for( let i =0;i<moredetails.length;i++){
   moredetails[i].addEventListener("click",function(e){
      e.preventDefault();


   moredetails[i].classList.toggle("modalWindow")
}
   )
}





let decrementButton = document.querySelectorAll(".decrement-button")[0] // кнопка -
console.log (decrementButton);
let incrementButton = document.querySelectorAll(".increment-button")[0]  // кнопка + 
console.log (incrementButton);

let productsQuantyti = document.querySelectorAll(".quantyti-input")[0]  // productQuantyti значение колличества  выбранного товара добавляемого в корзину.
console.log(productsQuantyti)




let curentCount =  productsQuantyti.value;



function toggleDecrementState(count){   // Функция получает значение переменной в поле колличества выбранного товара и в зависимости от значения включает и выключает активность кнопки минус.
if(count <=1 ){
   decrementButton.disabled=true;
   
}
else{
    decrementButton.disabled=false;
}
}

function toggleIncrementState(count){   // Функция получает значение переменной в поле колличества выбранного товара и в зависимости от значения включает и выключает активность кнопки минус.
   if(count >=5 ){
      incrementButton.disabled=true;
      
   }
   else{
      incrementButton.disabled=false;
   }
   }





toggleDecrementState(curentCount);     // Функция которая переключает состояние декремента.





// Вариант с блокировкой кнопи -



incrementButton.addEventListener("click",function(){
   let curentCount = + productsQuantyti.value;
   let nextcount = curentCount + 1;
   productsQuantyti.value = nextcount;
toggleDecrementState(nextcount);
toggleIncrementState(nextcount);
    
});




decrementButton.addEventListener("click",function(){
   let curentCount = + productsQuantyti.value;
   let nextcount = curentCount - 1;
   productsQuantyti.value = nextcount;
   toggleDecrementState(nextcount);
   toggleIncrementState(nextcount);
});






// Вариант с проверкой значения без блокиковки кнопки.

/*
decrementButton.addEventListener("click",function(){
   let curentCount = + productsQuantyti.value;
   if(curentCount>=2){
      rem();
   }
   else{
      removeEventListener("click",rem)
   }
});

incrementButton.addEventListener("click",function(){
   let curentCount = + productsQuantyti.value;
   if(curentCount>=1){
      add();
   }
   else{
      removeEventListener("click",add)
   }
   
});

function add(){
   let curentCount = + productsQuantyti.value;
   productsQuantyti.value = curentCount + 1;
}

function rem(){
   let curentCount = + productsQuantyti.value;
   productsQuantyti.value = curentCount - 1;
}*/