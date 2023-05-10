const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");


fill.addEventListener('dragstart',dragstart);
fill.addEventListener('dragend',dragend);

empties.forEach((empty)=>{
empty.addEventListener("dragover",dragover)
empty.addEventListener("dragenter",dragenter)
empty.addEventListener("dragleave",dragleave)
empty.addEventListener("drop",dragdrop)
})

function dragstart(){
this.className += " hold";
//event.target.className += " hold";
 setTimeout(()=>{
    this.className = "";
 },0)
}
function dragend(){
//console.log("Ended",event);
this.className = "fill"
}

function dragover(event){
event.preventDefault();

}
function dragenter(e){
e.preventDefault();
this.className += ' hovered';

}
function dragleave(){

this.className = 'empty';

}
function dragdrop(){

this.className = 'empty';
this.append(fill);

}

