const btn = document.querySelector(".btn");
const video = document.querySelector(".video");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click",function(){
   if(!btn.classList.contains("slide")){
      btn.classList.add("slide");
      video.pause();
   }
   else{
      btn.classList.remove("slide");
      video.play();
   }
})

window.addEventListener("load",function(){
   preloader.classList.add("hide");
})