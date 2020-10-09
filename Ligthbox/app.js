const closeBtn = document.querySelector(".close-btn");
const openLightbox = document.querySelector(".btn");
const section = document.getElementById("section-center");
const lightbox = document.querySelector(".lightbox");


openLightbox.addEventListener("click",function(){
   lightbox.classList.add("show");
   section.classList.add("overlay");
});

closeBtn.addEventListener("click",function(){
   lightbox.classList.remove("show");
   section.classList.remove("overlay");
});
