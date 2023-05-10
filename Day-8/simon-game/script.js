const buttonColors = ["red","blue","green","yellow"];

let gamePattern = []; //system generated colors
let userClickedPattern = [] // user clicked colors

let started = false;
let level = 0;

//event listener
document.addEventListener("keypress",()=>{
    if(!started){ //console.log(level);
        document.getElementById("level-title").innerHTML = `Level ${level}`;
        started = true;
        nextSequence();
    }
});
//user select details
document.querySelectorAll(".btn").forEach((item)=>{
    item.addEventListener("click",(event)=>{
        //console.log(event.target.id);
        let userChoosenColor = event.target.id;
        userClickedPattern.push(userChoosenColor);
        //animate
        animatePress(userChoosenColor);
        playSound(userChoosenColor);
        checkAnswer(userClickedPattern.length - 1);
    })
})
//opening fade 
function fadeIn(time,id) {
    let fade = document.getElementById(id);
    setTimeout(()=>{
        fade.style.opacity = 0.1;
},time)
}
function fadeOut(time,id) {
    let fade = document.getElementById(id);
    setTimeout(()=>{
        fade.style.opacity = 1;
},time)
    
}
//if level move next userclicked pattern must cleared
function nextSequence() {
    userClickedPattern = [];
    level++;
    document.getElementById("level-title").innerHTML = `Level ${level}`;
    let randomNumber = Math.floor(Math.random()*4);// return 0,1,2,3
    let randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
    console.log(gamePattern.length);
    fadeIn(100,randomChoosenColor);
    fadeOut(200,randomChoosenColor);

    playSound(randomChoosenColor);
    // game pattern and user pattern answer check
   // console.log(userClickedPattern.length);
   
}
function checkAnswer(currentLevel) {
   // console.log(currentLevel);
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){

            setTimeout(()=>{
                nextSequence();
            },1000)
        }
    }else{
        playSound("wrong");
        document.querySelector("body").classList.add("game-over");
        document.getElementById("level-title").innerHTML = "Game Over, Press Any Key to restart";
        setTimeout(()=>{
            document.querySelector("body").classList.remove("game-over");   
        },200);
        startOver();
    }  
}
//Math.floor(Math.random()*4)

//play sound
function playSound(name) {
    let audio = new Audio('sounds/'+name+".mp3");
    audio.play();
}

//selected animate
function animatePress(currentColor) {
    document.getElementById(currentColor).classList.add("pressed");
    
    setTimeout(()=>{
        document.getElementById(currentColor).classList.remove("pressed");
    
    },200)
}

//game restar
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}