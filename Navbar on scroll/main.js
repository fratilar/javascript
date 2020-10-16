var navbar = document.querySelector(".navbar");
var toggle = document.querySelector(".toggle");
var list = document.querySelector(".list");
var btnTop = document.querySelector(".btn-to-top");


// set date
var date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


window.addEventListener("scroll",function(){
   // show button to top
   if(window.scrollY > 500){
      btnTop.style.display="block";
   }
   else{
      btnTop.style.display="none";
   }

   // add sticky class to navbar
   navbar.classList.toggle("sticky",window.scrollY > 0);
   toggle.classList.toggle("sticky",window.scrollY > 0);
});


// toggle button , dynamic list items(container)
var listContainer = document.querySelector(".list-container");
toggle.addEventListener("click",function(){
   toggle.classList.toggle("closed");
   // list.classList.toggle("show-list");
   var containerHeight = listContainer.getBoundingClientRect().height;
   var listHeight = list.getBoundingClientRect().height;
   if(containerHeight===0){
      listContainer.style.height = `${listHeight}px`;
   }
   else{
      listContainer.style.height = 0;
   }
})

// scroll to top of section
var links = document.querySelectorAll(".social-links");
links.forEach(function(item){
   item.addEventListener("click",function(e){
      e.preventDefault();
      let id = e.currentTarget.getAttribute("href").slice(1);
      let section = document.getElementById(id);
      console.log(section);
      let navbarHeight = navbar.getBoundingClientRect().height;
      let sectionPosition = section.offsetTop - navbarHeight;
      let containerHeight = listContainer.getBoundingClientRect().height;
      
      if(navbarHeight > 82){
         sectionPosition = sectionPosition + containerHeight;
      }

      window.scrollTo({top:sectionPosition});
      toggle.classList.remove("closed");
      listContainer.style.height = 0;
   })
})

// buton to top
btnTop.addEventListener("click",function(){
   window.scrollTo({top:0});
 })