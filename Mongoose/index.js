// first require the module
const mongoose = require('mongoose');
// then call the main function
main()
.then(() =>{
 console.log('connected!')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}// connect to your database

// lect 2
// define your schema--user collection
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});


// model
// compile schema to model
const User = mongoose.model('User', userSchema);   


// create a user---insert one

// after creating this we must need to check the db to see if it is created or not
// we can check it in the mongo shell and takes commands form chatgpt
// const user1= new User({
//   name: 'Alice',
//   age: 25,
//   email: 'alice@example.com'  
// });
// user1.save()  // this save function will save the data to the db
// .then(() => console.log('User1 data saved'))
// .catch(err => console.log(err));
// // after running this code we can check in the db using the mongo shell
// // use the command "use test" to switch to the test db
// // then use the command "db.users.find().pretty()" to see the data in a pretty format

// user2= new User({
//   name: 'Bob',
//   age: 30,
//   email: 'bob@example.com'
// });
// user2.save()
// .then(() => console.log('User2 data saved'))
// .catch(err => console.log(err));  



// lect 3
// insert many
// User.insertMany([
//   {name: 'Charlie', age: 28, email: 'charlie@example.com'},
//   {name: 'David', age: 35, email: 'david@example.com'},
//   {name: 'Eve', age: 22, email: 'eve@example.com'},
//   {name: 'Frank', age: 40, email: 'frank@example.com'},
// ])
// .then(() => console.log('User3 data saved'))
// .catch(err => console.log(err));


// lect 4
// find
// condition example
// User.find({age: {$gt: 30}})   // $gt means greater than
// .then(users => console.log(users[0].name))  // it will print the name of the first user whose age is greater than 30
// .catch(err => console.log(err));


// // User.find({}).then((res) => {
// //   console.log(res);
// // }).catch((err) => {
// //   console.log(err);
// // });


// // find one
// User.findById({_id: '68ea08b4727a4b0c858b405d'})  // replace with an actual _id from your db
// .then(user => console.log(user))
// .catch(err => console.log(err)); 
// it will print the first user whose name is Alice



// lect 5
// update
// User.updateOne({name: 'Alice'}, {$set: {age: 26}}) // it will update the age of the user whose name is Alice to 26
// .then(() => console.log(users))
// .catch(err => console.log(err));


// update many
// User.updateMany({age: {$lt: 30}}, {$set: {age: 30}}) // it will update the age of all users whose age is less than 30 to 30
// .then(() => console.log(users))
// .catch(err => console.log(err)); 


// lect 6
// find one and update
// User.findOneAndUpdate({name: 'Frank'}, {$set: {age: 55}},{new:true}) // it will update the age of the user whose name is Bob to 31 and return the updated document
// .then(user => console.log(user))
// .catch(err => console.log(err));

// lect 7
// delete one
// User.deleteOne({name: 'Frank'}) // it will delete the user whose name is David
// .then(() => console.log(user))
// .catch(err => console.log(err)); 



// delete many
// User.deleteMany({age: {$gt: 30}}) // it will delete all users whose age is greater than 30
// .then(() => console.log('Users deleted'))
// .catch(err => console.log(err));

// lect 8
// find one and delete
// User.findOneAndDelete({name: 'Eve'}) // it will delete the user whose name is Charlie and return the deleted document
// .then(user => console.log(user))
// .catch(err => console.log(err));
// after running any of the above code comment it and run the next one to avoid multiple operations at once



// lect 9
// schema types and validation






