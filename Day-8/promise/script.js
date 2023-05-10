//promise
//state

// 1.waiting
// 2.resolved
// 3.rejected


const data = [
    {
        id:1,
        name:"siva"
    },
    {
        id:2,
        name:"siva2"
    },
    {
        id:3,
        name:"siva3"
    },


]

const  hello = new Promise((resolve,reject)=>{
   // resolve(data);
    reject(data);
})

//console.log(hello);
//old way
// hello.then(()=>{
//     console.log('Resolved');
// }).catch(()=>{
//     console.log('Rejected');
// })

//promise latest way

// async function getData(){
//     const response = await hello;
//     console.log(response);
// }
// getData()


async function getData(){
    try {
        const response = await hello;
        console.log(response);
    } catch (error) {
        console.log(error);
        console.log("error");
    }
   
}
getData()