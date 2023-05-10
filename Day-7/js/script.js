// const heading = document.getElementsByClassName("content");

// console.log(heading);
// //foreach not working
// // heading.forEach((item,index) => {
// //     console.log(item)
// // });

// for(let i= 0; i<heading.length;i++){
//     heading[i].innerHTML = `This is  a content from JS ${i + 1}`;
// }


//pass by reference

function turnOn(machine){
    let newM = {...machine};
    newM.isOn = true;
    //machine.isOn = true;
}

let laptop = {
    isOn:false,
}

console.log(laptop);
turnOn(laptop);

console.log(laptop);