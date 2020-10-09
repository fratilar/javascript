var navbar = document.querySelector(".navbar");

window.addEventListener("scroll",function(){
   navbar.classList.toggle("sticky",window.scrollY > 0);
})