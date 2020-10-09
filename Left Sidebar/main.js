const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const closeBtn = document.querySelector(".toggle");

menu.addEventListener("click",function(){
   navbar.classList.toggle("show");
})

closeBtn.addEventListener("click",function(){
   navbar.classList.remove("show");
})