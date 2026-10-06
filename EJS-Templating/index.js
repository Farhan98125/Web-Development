const express=require("express");
const app=express();

const port =8080;
const path=require("path");

// for ejs setup we write this 
app.set("view engine","ejs");
// we can open this dir from anywhere from the external server
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
res.render("home.ejs");
});

// passing data to ejs

app.get("/rolldice",(req,res)=>{
res.render("rolldie.ejs");
});



app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});