// import this from npm package @faker-js/faker
const { faker } = require('@faker-js/faker');
const mysql=require('mysql2');

// make connection to database
const connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'delta_app',
});


// make connection query

try{
connection.query("SHOW TABLES",(err,result)=>{
    if(err) throw err;
    // result is array of objects
    console.log(result);
});
}catch(err){
  console.log(err);
}
// to close the connection
connection.end();

let  createRandomUser=()=> {
  return {
    Id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    // avatar: faker.image.avatar(),
    password: faker.internet.password(),
   
  };
}
// print 
// console.log(createRandomUser());