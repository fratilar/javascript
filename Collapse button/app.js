const btns = document.querySelectorAll(".btn");
const questions = document.querySelectorAll(".questions");

btns.forEach(function(btn){
   btn.addEventListener("click",function(e){
      let active = e.currentTarget.parentElement.parentElement;

      questions.forEach(function(question){
         if(question !== active){
            question.classList.remove("show-text");
         }
      })

      active.classList.toggle("show-text");
   })
})
