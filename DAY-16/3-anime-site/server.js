const  express  = require("express");
const  bodyparser  = require("body-parser");
const https = require('https');
const  axios = require("axios");

const app = express();
// const isParsable = (data)=>{
//     //console.log("data",data);
//     try{
       
//         JSON.parse(data);
//     }catch(error){
//         return false;
//     }
//     return true;
// }
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    //res.send("api is working")
    res.sendFile(__dirname + "/index.html")
})
app.post("/search",(req,res)=>{
   //res.send(req.body.animeName);
   const animeName = req.body.animeName;
   const url = `https://api.jikan.moe/v4/anime?q=${animeName}&sfw`
   //const url = `https://api.jikan.moe/v4/anime?q=${animeName}&sfw`
   
   let result = {

   }

   axios.get(url).then((response)=>{
    console.log(JSON.parse(JSON.stringify(response.data)));
   })

//    https.get(url,(response)=>{
//    // console.log(response);
//    response.on("data",(data)=>{
//      result += data;

//    }).on("error",(err)=>{
//     console.log(err);
//    }).on("end",()=>{
//     //console.log("result",result);
//    // let temp = isParsable(result) ? JSON.parse(JSON.stringify(result)):{};
//     //console.log("result",JSON.parse(JSON.stringify(result)));
//       res.json(JSON.parse(JSON.stringify(result)));
//    })
//    })
   res.send("Got it");

})
app.listen(4000,()=>{
    console.log("Running")
})