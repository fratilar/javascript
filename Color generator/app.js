// Simple color
var colors=["red", "green", "rgb(243,178,89)", "#53f782"];

var buton = document.querySelector("button");
var color = document.querySelector(".color");


buton.addEventListener("click",function(){
   var random = Math.floor(Math.random()*colors.length);
   document.body.style.backgroundColor=colors[random];
   color.textContent=colors[random];
})

