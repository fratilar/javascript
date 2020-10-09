// Random Color

// var colors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
var colors="0123456789ABCDEF";

var buton = document.querySelector("button");
var color = document.querySelector(".color");

buton.addEventListener("click",function(){
   var hex = "#";
   for(var i=0;i<6;i++){
      var random = Math.floor(Math.random()*colors.length);
      hex=hex+colors[random];
   }
   document.body.style.backgroundColor=hex;
   color.textContent=hex;
})