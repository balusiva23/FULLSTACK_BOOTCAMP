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



mongoose.connect("mongodb+srv://balusiva1299:Siva2312@cluster0.avjoegu.mongodb.net/hotel-management-db?retryWrites=true&w=majority")

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
    aadhaarno:String,
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
