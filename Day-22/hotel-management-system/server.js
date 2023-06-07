const express = require("express");
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const passportLocalManager = require('passport-local-mongoose');
const passport = require("passport");
const session = require("express-session");

const app = express();
app.set("view engine","ejs")
app.use(bodyparser.urlencoded({extended:true}))
//app.use(express.static("public"));
app.use(express.static('public'));
app.use(
    session({
        secret:"345g@3$gsd",
        resave:true,
        saveUninitialized:false,
    })
);

app.use(passport.initialize());
app.use(passport.session());



mongoose.connect("mongodb+srv://balusiva1299:Siva2312@cluster0.avjoegu.mongodb.net/hotel-management-db?retryWrites=true&w=majority");
// mongoose.connect("mongodb+srv://balusiva1299:Siva2312@cluster0.avjoegu.mongodb.net/hotel-management-db?retryWrites=true&w=majority", () => {
//     console.log("Mongo connected");
// });

const  userSchema  = new mongoose.Schema({
    email:String,
    passport:String
})
userSchema.plugin(passportLocalManager);

const User = new mongoose.model("users",userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());// logged user data session store
passport.deserializeUser(User.deserializeUser());// logout user data session delete

// customer model

const Customer = mongoose.model("customers",{
    userId:String,
    roomNo:Number,
    name:String,
    mobileNo:Number,
    address:String,
    aadhaarNo:String,
    city:String,
    state:String,
    zip:Number,
});


app.get("/",(req,res)=>{
res.render("index");
})

let userLoggedin = false;
app.get("/admin",(req,res)=>{
if(req.isAuthenticated()){ //userLoggedin
    res.render("admin");
}else{
    res.redirect("/");
}
})
//register
app.get("/register",(req,res)=>{
    if(req.isAuthenticated()){ //userLoggedin
        res.render("register");
    }else{
        res.redirect("/");
    }
    })

app.post("/",(req,res)=>{
    // User.register({username:req.body.username},req.body.password).then((user)=>{
    //     passport.authenticate("local")(req,res,()=>{
    //         res.redirect("/");
    //     })
    // }).catch((err)=>{
    //     console.log(err);
    // })

    const user = new User({
        username:req.body.username,
        password:req.body.password,
    })
    req.login(user,(err)=>{
        if(err){
            console.log(err);
        }else{
            passport.authenticate("local")(req,res,()=>{
                res.redirect("/admin")
            })
        }
       
    });

})

//add
app.post("/admin",(req,res)=>{
    const customer = new Customer(req.body);
    customer.save().then(()=>{
        //res.send("<h1>Customer saved Sucessfully</h1>")
        res.render("success",{
            subTitle:"Success",
            subject:"Added",
        })
    })
})

//search
app.get("/search",(req,res)=>{
    if(req.isAuthenticated){
        res.render("search",{
            option:"Search",
            buttonName:"Search",
            url:"search"

        })
    }else{
        res.redirect("/");
    }
})


app.post("/search",(req,res)=>{
    Customer.findOne({userId:req.body.userId}).then((data)=>{
        if(data){
           res.render("searchResults",data)
        }else{
            res.render("searchFailure",{
                url : "search"
            })
        }
    })
})

//update
app.get("/update",(req,res)=>{
    if(req.isAuthenticated){
        res.render("search",{
            option:"Update",
            buttonName:"Search",
            url:"update"

        })
    }else{
        res.redirect("/");
    }
})
app.post("/update",(req,res)=>{
    Customer.findOne({userId:req.body.userId}).then((data)=>{
        if(data){
           res.render("update",data)
        }else{
             res.render("searchFailure",{
                url : "update"
             })
        }
    })
})
app.post("/updateResults",(req,res)=>{
   // console.log(req.body);
    Customer.findOneAndUpdate({userId: req.body.userId},req.body).then(()=>{
        
        res.render("success",{
            subTitle:"Updated",
            subject:"Updated",
        })
        
    })
})
//delete
app.get("/delete",(req,res)=>{
    if(req.isAuthenticated){
        res.render("search",{
            option:"Delete",
            buttonName:"Delete",
            url:"delete"

        })
    }else{
        res.redirect("/");
    }
})
app.post("/delete",(req,res)=>{
    // console.log(req.body);
     Customer.findOneAndDelete({userId: req.body.userId}).then((data)=>{
         if(data){
            res.render("success",{
                subTitle:"Deleted",
                subject:"deleted",
            })
         }else{

            res.render("searchFailure",{
                url : "delete"
            })
         }
         
         
     })
 })
//logout 

app.get("/logout",(req,res)=>[
    req.logout((err)=>{
        if(err){
            console.log(err);
        }
        res.redirect("/");
    })
])

app.listen(4000,()=>{
    console.log("Server is Running");
});
