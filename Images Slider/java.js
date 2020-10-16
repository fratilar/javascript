const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const image = document.querySelectorAll(".imagine");
console.log(image);

let counter = 0;

image.forEach(function(img,index){
   img.style.left = `${index*100}%`;
});

next.addEventListener("click",function(e){
   counter++;
   if(counter===image.length){
      counter=0;
   }
   image.forEach(function(img){
      img.style.transform = `translateX(-${counter*100}%)`;
   })
});

prev.addEventListener("click",function(){
   counter--;
   if(counter<0){
      counter = image.length-1;
   }
   image.forEach(function(img){
      img.style.transform = `translateX(-${counter*100}%)`;
   })
});

