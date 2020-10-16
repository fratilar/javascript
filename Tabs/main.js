const btn = document.querySelectorAll(".btn");
const sectionCenter = document.querySelector(".section-center");
console.log(sectionCenter);
const content = document.querySelectorAll(".content");

sectionCenter.addEventListener("click",function(e){
   const id = e.target.dataset.id;
   const element = document.getElementById(id);
   if(id){
      btn.forEach(function(btn){
         btn.classList.remove("active");
         e.target.classList.add("active");
      })
      content.forEach(function(item){
         item.classList.remove("active");
         element.classList.add("active");
      })
   }
})
