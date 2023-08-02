// write js code here if required
 function currDayTime(){
const paratag = document.getElementById('timer');
const date = new Date();
const day = date.getDate();
const month = date.getMonth()+1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const text = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
paratag.innerText = text;
 setTimeout(currDayTime, 1000);
 }
currDayTime();
