// This file accquire all the info from the folders files and store in a single file named index.js

const apple=require("./apple");
const banana=require("./banana");
const orange=require("./orange");

let fruits=[apple,banana,orange];

module.exports=fruits;