var buton = document.querySelector(".toggle");
var links = document.querySelector(".pages");

buton.addEventListener("click",function(){
   links.classList.toggle("show-page");
   buton.classList.toggle("closed");
});