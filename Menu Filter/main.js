const menu = [
   {
     id: 1,
     title: "buttermilk pancakes",
     category: "breakfast",
     price: 15.99,
     img: "./breakfast1.jpg",
     desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
   },
   {
     id: 2,
     title: "diner double",
     category: "lunch",
     price: 13.99,
     img: "./lunch1.jpg",
     desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
   },
   {
     id: 3,
     title: "godzilla milkshake",
     category: "shakes",
     price: 6.99,
     img: "./shakes.jpeg",
     desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
   },
   {
     id: 4,
     title: "country delight",
     category: "breakfast",
     price: 20.99,
     img: "./breakfast2.jpg",
     desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
   },
   {
     id: 5,
     title: "egg attack",
     category: "lunch",
     price: 22.99,
     img: "./lunch2.jpg",
     desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
   },
   {
     id: 6,
     title: "oreo dream",
     category: "shakes",
     price: 18.99,
     img: "./shakes2.jpg",
     desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
   },
   {
     id: 7,
     title: "bacon overflow",
     category: "breakfast",
     price: 8.99,
     img: "./breakfast3.jpg",
     desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
   },
   {
     id: 8,
     title: "american classic",
     category: "lunch",
     price: 12.99,
     img: "./dinner.jpg",
     desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
   },
   {
     id: 9,
     title: "quarantine buddy",
     category: "shakes",
     price: 16.99,
     img: "./shakes.jpeg",
     desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
   },
   {
     id: 10,
     title: "bison steak",
     category: "dinner",
     price: 22.99,
     img: "./dinner2.jpg",
     desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
   },
 ];
 const gridItems = document.querySelector(".grid-items");
 const btns = document.querySelectorAll(".btn");

window.addEventListener("DOMContentLoaded",function(){
   displayMenu(menu);
});

btns.forEach(function(btn){
   btn.addEventListener("click",function(event){
      let category = event.currentTarget.dataset.filter;
      let menuCategory = menu.filter(function(menuItem){
         if(menuItem.category===category){
            return menuItem;
         }
      });
      if(category==="all"){
         displayMenu(menu);
      }
      else{
         displayMenu(menuCategory);
      }
   });
});

btns.forEach(function(btn){
   btn.addEventListener("click",function(e){
      let active = document.querySelector(".active");
      active.classList.remove("active");
      btn.classList.add("active");
   });
});

function displayMenu(menuItems){
   let displayMenuItems = menuItems.map(function(item){
      return `<article class="menu-item">
      <img src=${item.img} class="photo" alt=${item.title}>
      <div class="content">
         <div class="head">
            <h4 class="item-title">${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
         </div>
         <p class="content-info">${item.desc}</p>
      </div>
   </article>`;
   });
   displayMenuItems = displayMenuItems.join("");
   gridItems.innerHTML = displayMenuItems;
}