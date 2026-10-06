// let n=5;
// for(let i=0;i<n;i++){
//     console.log("hello,",1);
// }



// process.argv -- pass arguments
// let args=process.argv;
// // to skip first two paths
// for(let i=2;i<args.lenght;i++){
//     console.log("hello to ",args[i]);
// }


// FILE TO FILE EXPORTS

// module.exports -used to exports the other files code in this file
// ./ is used for path acquire

// const val=require("./math");
// // console.log(val);
// console.log(val.sum(2,2));


// folders info

// const info=require("./fruits");
// console.log(info);


// to acess the golbally figlit we use 
// const figlet = require("figlet");

// figlet("Farhan", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


// Import vs require 
// best import dont use require
// we cannot run it directly first we need package .json in backend dire.


// import { sum ,g} from "./math.js";
// console.log(g);



// random words package
import { generate } from "random-words";
console.log(generate());