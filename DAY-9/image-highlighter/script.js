const current = document.querySelector("#current");
const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll(".imgs img");

const opacity = 0.6;

img[0].style.opacity = opacity;

imgs.addEventListener("click",(event)=>{

    img.forEach((imgElem)=>{imgElem.style.opacity = 1 });

    current.src = event.target.src;
    //console.log('clicked',event.target.src);
    current.classList.add('fadeIn');

    setTimeout(()=>{
        current.classList.remove("fadeIn");
    },600);
    event.target.style.opacity = opacity;
});

