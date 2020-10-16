const months = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];

const days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
   
];

const giveaway = document.querySelector(".giveaway");
const countdown = document.querySelector(".countdown");
const headings = document.querySelectorAll(".time-format h4");

let dataViitoare = new Date(2020,11,14,2,32,00);

let year = dataViitoare.getFullYear();

let month = dataViitoare.getMonth();
month = months[month];
// or let month = months[11];

let date = dataViitoare.getDate();
let day = dataViitoare.getDay();
day = days[day];
// or let day = days[3];

let hour = dataViitoare.getHours();
let minutes = dataViitoare.getMinutes();
let seconds = dataViitoare.getSeconds();
giveaway.innerHTML = `Giveaway ends on ${day}, ${month} ${date} ${year}, ${hour}:${minutes}:${seconds}`;

// get time in milliseconds
function timpRamas(){
   let timpViitor = dataViitoare.getTime();
   let timpActual = new Date().getTime();
   let timp = timpViitor - timpActual;

   //1s = 1000ms;
   //1m = 60s;
   //1h = 60m;
   //1day = 24h;

   // valori in milisecunde
   let oneDay = 24*60*60*1000;
   let oneHour = 60*60*1000;
   let oneMinute = 60*1000;
   let oneSecond = 1000;

   // calcul 
   let days = timp/oneDay;
   days = Math.floor(days);
   let hours = Math.floor((timp % oneDay) / oneHour);
   let minutes = Math.floor((timp % oneHour) / oneMinute);
   let seconds = Math.floor((timp % oneMinute) / oneSecond);

   const values = [days,hours,minutes,seconds];

   headings.forEach(function(item,index){
      item.innerHTML = values[index];
   })
   if(timp<0){
      clearInterval(counter)
      countdown.innerHTML = `<h4>This watch has a owner now</h4>`;
   }
}
const counter = setInterval(timpRamas,1000);
timpRamas();