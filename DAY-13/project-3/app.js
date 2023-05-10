const fs = require('fs');

// fs.writeFile('new.txt',"Hey are you there?",(err)=> {
//     if(err){
//         console.log(err);
//     }
//     console.log('file Created');
// });

// fs.open("tem.txt","w",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("File Created");
// });

// fs.writeFile('new.txt',"Hey are you there?",(err)=> {
//     if(err){
//         console.log(err);
//     }
//     console.log('file Updated');
// });

// fs.appendFile("new.txt","This is new one",(err)=>
// {
//     if(err){
//                 console.log(err);
//             }
//             console.log('file Updated');
// }
// )

// fs.unlink('new.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("File Deleted");
// })

// fs.readFile("sample.txt","utf-8",(err,data)=> {
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })

// fs.mkdir("temp",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("Folder Created");
// })


fs.readdir('temp',(err,files) =>{
    if(err){
       console.log(err); 
    }
    //console.log(files);
    files.forEach((file)=>{
      fs.readFile(`temp/${file}`,"utf-8",(err,data)=>{
        if(err){
            console.log(err);
        }
        console.log(data);
      })
    })
})