const reviews = [
   {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img: "./Chris-Pratt.jpg",
      text: "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere."
   },
   {
      id: 2,
      name: "Marco Polo",
      job: "web designer",
      img: "./pic1.jpeg",
      text: "Conţinut aici, conţinut acolo, făcându-l să arate ca o engleză citibilă. Multe pachete de publicare pentru calculator şi editoare de pagini web folosesc acum Lorem Ipsum ca model standard de text, iar o cautare." 
   },
   {
      id: 3,
      name: "Mark Smith",
      job: "photographer",
      img: "./pic2.jpg",
      text: "În ciuda opiniei publice, Lorem Ipsum nu e un simplu text fără sens. El îşi are rădăcinile într-o bucată a literaturii clasice latine din anul 45 î.e.n., făcând-o să aibă mai bine de 2000 ani. Profesorul universitar."
   },
   {
      id: 4,
      name: "Razvan Fratila",
      job: "Liber profesionist",
      img: "./profil.jpg",
      text: "Există o mulţime de variaţii disponibile ale pasajelor Lorem Ipsum, dar majoritatea lor au suferit alterări într-o oarecare măsură prin infiltrare de elemente de umor, sau de cuvinte luate aleator, care nu sunt câtuşi de puţin credibile."
   }
];

const img = document.getElementById("person");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function(){
   showPerson();
});

function showPerson(){
   let item = reviews[currentItem];
   img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   text.textContent = item.text;
}

prevBtn.addEventListener("click",function(){
   currentItem--;
   if(currentItem<0){
      currentItem=reviews.length-1;
   }
   showPerson();
});

nextBtn.addEventListener("click",function(){
   currentItem++;
   if(currentItem>reviews.length-1){
      currentItem=0;
   }
   showPerson();
});

randomBtn.addEventListener("click",function(){
   currentItem = Math.floor(Math.random()*reviews.length);
   showPerson();
});