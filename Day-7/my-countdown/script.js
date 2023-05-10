const days= document.getElementById('days');
const hours= document.getElementById('hours');
const minutes= document.getElementById('minutes');
const seconds= document.getElementById('seconds');

const year = document.getElementById("year");
const countdown = document.getElementById("countdown");

const loading = document.getElementById('loading');

let currentyear = new Date().getFullYear();

let nextyear = currentyear + 1;

year.innerHTML = nextyear;

let newYearTime = new Date(`January 01 ${nextyear} 00:00:00` );

//newYearTime

function updatecountdown() {
    let currentTime = new Date();
    let diff = newYearTime - currentTime;
    //console.log(diff);
   let d = Math.floor(diff /1000 / 60 / 60 / 24);//1sec== 100ms // 60 sec/60 min/24 hr
   let h = Math.floor(diff /1000 / 60 / 60) % 24;//100ms //60sec // 60min
   let m = Math.floor(diff /1000 / 60 ) % 60;//100ms //60sec // 60min
   let s = Math.floor(diff /1000  ) % 60;//100ms //60sec // 60min
  // console.log(d,h,m,s);
   
   days.innerHTML = d < 10 ? "0" +d:d;
   hours.innerHTML = h < 10 ? "0" +h:h;
   minutes.innerHTML = m < 10 ? "0" +m:m;
   seconds.innerHTML = s < 10 ? "0" +s:s;

}

setInterval(updatecountdown,1000);
//updatecountdown();

setTimeout(()=>{
   loading.remove();
   countdown.style.display = "flex";
},1000)