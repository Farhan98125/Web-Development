// first require the module
const mongoose = require('mongoose');
// then call the main function
main()
.then(() =>{
 console.log('connected!')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amozon');
}

// connect to your database
// to connectthe db we need to difine a schema first
// define your schema--user collection
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
    },
    author: {
    type: String,
    },  
    price: {
    type: Number, 
    },
    discount: {
    type: Number,
    default: 0
    },  
});

// model
// compile schema to model
const Book = mongoose.model('Book', bookSchema);
// create a book---insert one
const book1 = new Book({
  title: "Atomic Habits",
  author: "James Clear",
  price: 499,
});

book1.save()
  .then((res) => {
    console.log(res);
    console.log('Book1 data saved');
  })
  .catch(err => console.log(err));

  

   