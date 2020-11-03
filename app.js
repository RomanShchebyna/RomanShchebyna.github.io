
 "use strict"
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





let decrementButtons = document.querySelectorAll(".decrement-button") // кнопка -

console.log (decrementButtons);
let incrementButtons = document.querySelectorAll(".increment-button")  // кнопка + 
console.log (incrementButtons);

let productsQuantyti = document.querySelectorAll(".quantyti-input")  // productQuantyti значение колличества  выбранного товара добавляемого в корзину.
console.log(productsQuantyti)




// let curentCount =  productsQuantyti.value;

let minCount = 1;
let maxCount = 5;

for (let i=0; i < productsQuantyti.length; i++){
   let curentCount = productsQuantyti[i].value;
   toggleButtonState(curentCount,decrementButtons[i],incrementButtons[i])
}


function toggleButtonState(count,decrementButton,incrementButton){
   decrementButton.disabled = count <= minCount;
   incrementButton.disabled = count >= maxCount;   // если count правда тогда  отключаем кнопку.
}



// Вариант с блокировкой кнопи -

for (let i=0; i < incrementButtons.length;i++)
{
incrementButtons[i].addEventListener("click",function(){
   let curentCount = +productsQuantyti[i].value;
   let nextcount = curentCount + 1;
   productsQuantyti[i].value = nextcount;
   toggleButtonState(nextcount,decrementButtons[i],incrementButtons[i])
    
})
}


for (let i=0;i<decrementButtons.length;i++)
{
decrementButtons[i].addEventListener("click",function(){
   let curentCount = + productsQuantyti[i].value;
   let nextcount = curentCount - 1;
   productsQuantyti[i].value = nextcount;
   toggleButtonState(nextcount,decrementButtons[i],incrementButtons[i])
})
}


AOS.init();



function Car(model,color,year){
   this.model = model;
   this.color = color;
   this.year = year;

   console.log(this)
}

let audi=new Car("A5","black",2011);
let bmw=new Car("320","grey",2015);
console.log(audi);
console.log(bmw);

// Функция конструктор  калькулятор у которой есть метод сум.
function Calculator(a,b){
   this.a = a;
   this.b = b;
   

   this.sum = function(){
      return this.a + this.b;
   }
   this.mul = function(){
      return this.a * this.b;
   }
}

let calc1= new Calculator(2,15);
console.log(calc1.sum())
console.log(calc1.mul())


let object ={
   a:4,
   b:10,
   sum: function(){
      console.log(this)
   }
}
object.sum();


let object2 ={
   a:4,
   b:10,
   sum: function(){
      function test(){
          console.log(this)
      }
      test();
     
   }
}
object2.sum();


function hi(surname){
   console.log(this)
   console.log(this.name+ surname)
}

let user ={
name:"Ivan"
}
hi.call(user);  // вызов  функции  в контексте . 
hi.apply(user);

// Метод call можно использовать когда в функции есть параметры и ини передаются в виде строки.
// Метод apply можно использовать когда в функциии есть параметрі и они передаются в виде массива.

hi.call(user,"test")
hi.apply(user,["Test2"])

 let test = hi.bind(user,"Bush")      // Если нужно вызвать по какому  то событию.
test();