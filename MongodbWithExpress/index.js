// set up for our website
const express = require('express');
const app = express();
const port = 8080;
// require the chat model
const chat = require('./models/chat.js');

// path
const path=require('path');
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

// styele sheet
app.use(express.static(path.join(__dirname,"public")));
// to parse the data
app.use(express.urlencoded({extended:true}));

// mongoose
const mongoose = require('mongoose');
main()
.then(() =>{
     console.log("connection successful");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    console.log("MongoDB is connected");
}


// Index route
app.get('/chats', async(req, res) => {
    let chats= await chat.find();
    console.log(chats);
    // render the chats.ejs file and pass the chats data to it
    // to show it in the browser 
    res.render("index.ejs",{chats});
});

//  new route
app.get('/chats/new', (req, res) => {
    res.render("new.ejs"); 
});

// create route
app.post("/chats",(req,res)=>{
    // to access form data
    let{from,to,msg}=req.body;
    let newChat=new chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date(),
    });
    // to save
    newChat
    .save()
    .then((res) => {
        console.log("chat was saved");
        // res.send("data received and working");
    })
    .catch((err) => {
        console.log(err);
        // res.send("Error saving chat");
    });
    res.redirect("/chats");
});



// work for data base
let chat1=new chat({
    from:"user1",
    to:"user2",
    msg:"hello this is user1 ",
    created_at:new Date(),  // time will show in UTC     
});
chat1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

    // set route to run the first time the server is started 
app.get('/', (req, res) => {
    res.send('root is working!');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
