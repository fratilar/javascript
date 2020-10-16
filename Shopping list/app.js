const alert = document.querySelector(".alert");
const form = document.querySelector(".shopping-form");
const input = document.getElementById("item");
const shoppingContainer = document.querySelector(".shopping-container");
const shoppingList = document.querySelector(".shopping-list");
const clearBtn = document.querySelector(".clear-btn");
const submitBtn = document.querySelector(".submit-btn");

// ******* Edit options *******
let editElement;
let editez = false;

// ******* Event Listeners *******
form.addEventListener("submit",function(e){
   e.preventDefault();
   addItem();
});
clearBtn.addEventListener("click",clearButton);

// ******* Functions *******
// add items to list
function addItem(){
   const value = input.value;
   if(value && !editez){
      // create new element
      const element = document.createElement("div");
      // add class to element
      element.classList.add("shopping-items");
      //insert content to element
      element.innerHTML = `<p class="item">${value}</p>
                           <div class="btn-container">
                           <button type="button" class="edit-btn">
                              <i class="fas fa-edit"></i>
                           </button>
                           <button type="button" class="delete-btn">
                              <i class="fas fa-trash"></i>
                           </button>
                           </div>`;
      // add element to parent
      shoppingList.appendChild(element);
      // edit and delete btns events
      let deleteBtn = element.querySelector(".delete-btn");
      let editBtn = element.querySelector(".edit-btn");
      deleteBtn.addEventListener("click",removeItem);
      editBtn.addEventListener("click",editItem);
      // show container
      shoppingContainer.classList.add("show-container");
      // show alert
      alertText("Item added succesfully!","green");
      // set default input
      setDefault();
   }
   else if(value && editez){
      editElement.innerHTML = value;
      alertText("Item changed!","green");
      setDefault();
   }
   else{
      alertText("Please insert item!","red");
   }
}
// alert text
function alertText(text,color){
   alert.textContent = text;
   alert.classList.add(`${color}`);
   setTimeout(function(){
      alert.textContent="";
      alert.classList.remove(`${color}`);
   },1000) 
};
// set Default input
function setDefault(){
   input.value="";
   editez = false;
   submitBtn.textContent = "Add items";
}
// remove list item
function removeItem(event){
   const item = event.currentTarget.parentElement.parentElement;
   shoppingList.removeChild(item);
   const element = document.querySelectorAll(".shopping-items");
   if(element.length===0){
      shoppingContainer.classList.remove("show-container");
   }
   alertText("Item removed!", "red");
}
// edit item
function editItem(event){
   editElement = event.currentTarget.parentElement.previousElementSibling;
   input.value = editElement.innerHTML;
   editez = true;
   submitBtn.textContent = "Edit";
}
// clear button function
function clearButton(){
   const items = document.querySelectorAll(".shopping-items");
   items.forEach(function(item){
      shoppingList.removeChild(item);
   })
   shoppingContainer.classList.remove("show-container");
   alertText("Items removed!", "red");
   setDefault();
}