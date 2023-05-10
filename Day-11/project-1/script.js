const time = document.getElementById("time"),
greetings = document.getElementById("greetings"),
name = document.getElementById("name"),
focus = document.getElementById("focus");

function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    const session = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;
    time.innerHTML = `${addZero(hour)}: ${addZero(min)}:${addZero(sec)}  ${session};`
     
    setTimeout(showTime,1000)
}

function addZero(n) {
    return n < 10 ? "0"+n : n;
}

function setBgGreet() {
    let today = new Date();
    hour = today.getHours();
   // hour = 19;

    if(hour < 12){
        document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/beautiful-autumn-forest_130291-2706.jpg')";
        greetings.innerText = "Good Morning, "
    }else if(hour < 18){
        document.body.style.backgroundImage = "url('https://png.pngtree.com/thumb_back/fh260/background/20210910/pngtree-scenery-in-the-afternoon-at-the-foot-of-the-mountain-still-image_839719.jpg')"
        greetings.innerText = "Good Afternoon, "
    }else{
        document.body.style.backgroundImage = "url('https://img.freepik.com/premium-vector/sky-night-background-online-video-conferencing_23-2148619595.jpg"
        greetings.innerText = "Good Evening, "
        document.body.style.color = "white";
    }
}

//sessionStorage.setItem('','')
function setName(e){
    if(e.type === 'keypress'){
        if(e.keycode === 13){
            localStorage.setItem("name",e.target.innerText);
            name.blur();
        }else{
            localStorage.setItem("name",e.target.innerText);
        }
    }
}

function setFocus(e) {
    if(e.type === 'keypress'){
        if(e.keycode === 13){
            localStorage.setItem("focus",e.target.innerText);
            focus.blur();
        }else{
            localStorage.setItem("focus",e.target.innerText);
        }
    }
}

function getName() {
    if(localStorage.getItem('name')=== null){
        name.innerHTML = "[Enter your Name]";
    }else{
        name.innerHTML = localStorage.getItem('name');
    }
}
function getFocus() {
    if(localStorage.getItem('focus')=== null){
        focus.innerHTML = "[Enter Focus]";
    }else{
        focus.innerHTML = localStorage.getItem('focus');
    }
}

name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);
focus.addEventListener("blur",setFocus);
focus.addEventListener("keypress",setFocus);

setBgGreet();
showTime();
getName();
getFocus();