// this file is used to initialize the application
// we use sample database for development and testing
// in production, we use real database
const mongoose = require('mongoose');
const chat = require('./models/chat.js');
main()
.then(() =>{
     console.log("connection successful");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    console.log("MongoDB is connected");
}
// we want to store huge data so we store it in form of array
// we create an array of objects of multiple chat messages

let allchats=[
    {
        from:"user1",
        to:"user2",
        msg:"hello this is user1 ",
        created_at:new Date(),  // time will show in UTC
    },
    {
        from:"user3",
        to:"user4",
        msg:"hello this is user2 ",
        created_at:new Date(),  // time will show in UTC
    },
    {
        from:"user5",
        to:"user6",
        msg:"how are you user2 ?",
        created_at:new Date(),  // time will show in UTC
    },
    {
        from:"user7",
        to:"user8",
        msg:"I am fine user1, how are you ?",
        created_at:new Date(),  // time will show in UTC
    },
    {
        from:"user9",
        to:"user10",
        msg:"I am also fine user2, thanks for asking",
        created_at:new Date(),  // time will show in UTC

    },
    {
        from:"user11",
        to:"user12",
        msg:"what are you doing user1 ?",
        created_at:new Date(),  // time will show in UTC
    },
    {
        from:"user13",
        to:"user14",
        msg:"I am working on a project user2",
        created_at:new Date(),  // time will show in UTC
    },
    {
        from:"user15",
        to:"user16",
        msg:"which project are you working on user1 ?",
        created_at:new Date(),  // time will show in UTC
    }
];

chat.insertMany(allchats)
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// chat1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


