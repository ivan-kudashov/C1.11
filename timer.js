const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');
const plus_sec = document.querySelector('.plus_sec');
const minus_sec = document.querySelector('.minus_sec');
const plus_min = document.querySelector('.plus_min');
const minus_min = document.querySelector('.minus_min');
const start = document.querySelector('.start');
const reset_timer = document.querySelector('.reset_timer');

let countSec = 0;
let countMin = 0;

const updateText = () =>{	
  minutes.innerHTML = (0 + String(countMin)).slice(-2);
  seconds.innerHTML = (0 + String(countSec)).slice(-2);
}
updateText();

const countDown = () => {	
	let total = countSec + countMin * 60;
  const timeinterval = setTimeout(countDown, 1000);
  if (total <= 0) {
    clearInterval(timeinterval);
    timer.style.display = 'none';
    message.innerHTML = '<h3>I am done...</h3>'
  }
  if(countSec > 0) countSec--;
  else{
  	countSec = 59;
    countMin--;
  } 
  updateText();
}

plus_sec.onclick = () =>{
  if(countSec < 59 & countMin <= 59) ++countSec;
  else if (countMin < 59) {
	countSec = 0;
  	++countMin;  
  }
  updateText()
}

minus_sec.onclick = () =>{
	if(countMin <= 0 && countSec===0){
  	countSec = 0;
    countMin = 0;
    return;
  }
  if(countSec > 0) --countSec;
  else{
  	countSec = 59;
  	--countMin;
  }
  updateText();
}
start.onclick = () => {
	  countDown();  
}
plus_min.onclick = () =>{
  if(countMin < 59) ++countMin;
  updateText()
}
minus_min.onclick = () =>{
  if(countMin <= 59 & countMin > 0) --countMin;
  updateText()
}
reset_timer.onclick = () => {
	countMin = 0;
	countSec = 0;
	timer.style.display = 'block';
    message.innerHTML = '' 
	updateText();	
}