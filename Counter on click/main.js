var span = document.getElementById("span");
var buttons = document.querySelectorAll(".btn");
var counter = 0;

buttons.forEach(function(btn){
   btn.addEventListener("click", function(e){
      var click = e.currentTarget.classList;
      if(click.contains("decrease")){
         counter--;
      }
      else if(click.contains("increase")){
         counter++;
      }
      else{
         counter=0;
      }
      if(counter<0){
         span.style.color="red";
      }
      else if(counter>0){
         span.style.color="green";
      }
      else{
         span.style.color="black";
      }
      span.textContent=counter;
   });
});
