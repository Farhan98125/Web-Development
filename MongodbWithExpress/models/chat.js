// we create this folder or file to store all the models
// we will do all our database related work here
// bcz we have lot of amt data to store in db
const mongoose=require('mongoose');
const chatSchema=new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        maxLength:50
    },
    created_at:{
        type:Date,
        required:true,
    },
});

// create model and run 
const chat=mongoose.model("chat",chatSchema);
module.exports=chat;

