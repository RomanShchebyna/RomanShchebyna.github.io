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
btn.addEventListener("click",function(e){
   e.preventDefault();
   modal.classList.add("show");
   modal.classList.remove("hide")

})
})

function closeModal(){
   modal.classList.add("hide")
   modal.classList.remove("show")
}
closeBtn.addEventListener("click",closeModal)

modal.addEventListener("click",function(e){
   if(e.target==modal){
      closeModal()
   }
})


// for( let i =0;i<moredetails.length;i++){
//    moredetails[i].addEventListener("click",function(e){
//       e.preventDefault();


//    moredetails[i].classList.toggle("modalWindow")
// }
//    )
// }