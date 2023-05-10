const arr = [15,16,17,35,45,50]

// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//for each
// arr.forEach((value,index,curarr)=>{
// console.log(value,index,curarr);
// })

//for each
// const newarr = [];
// arr.forEach((value,index,curarr)=>{
//      //console.log(value,index,curarr);
//      newarr.push(value * 10);
//      })
// console.log(newarr);

//map
// arr.map((value,index,curarr)=>{
//     // console.log(value,index,curarr);
//     })

//     const newArr = arr.map((value,index,curarr)=>{
//         return value * 10;
//     })
//     console.log(newArr);



//filter
// const newArray = arr.filter((value,index,curarr)=>{
//     //return value * 10;
//     return value < 20;
// })


//Reduce

//reutrn value
const sum = arr.reduce((preval,curval)=>{
 console.log(preval,curval);
 return preval + curval;
},0)
//console.log();
console.log(sum);

