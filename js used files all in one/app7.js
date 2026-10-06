// const student={
//     name:"farhan",
//     age:23,
//     marks:90,
//     eng:95,
//     math:39,
//     sci:78,
//     getAvg() {
//         let avg= (this.eng + this.mah + this.sci) /3;
//        console.log(avg);
//     }
// }

// try and catch
// console.log('hello');
// console.log('hello');
// try {
//     console.log(a);    // their is an error 
// } catch(error)  {
//     console.log(error);  // to show what error occurs
//     console.log('error');
    
// }
// console.log('hello');



// arrow functions



// set timeout
// setTimeout(() => {
//     console.log('hello');
//     }, 2000); // 2000 is in miliseconds
    
//     console.log("welcome");

// set interval
// let id=setInterval(()=>
// console.log('hello'), 2000); // 2000 is in miliseconds

// // to stop it    
// clearInterval(id); // id is the id of the interval function

// let id2=setInterval(()=>
//     console.log('hello this is farhan khan'), 2000); // 2000 is in miliseconds
    
//     // to stop it    
//     clearInterval(id)


// this with arrow functions
// const student = {
//     name: 'farhan',
//     marks:38,
//     pop:this,  // gobel scope 
// };



// const square=(n)=>{
//     return n*n;
// }


// let id=setInterval(() => {
    
//         console.log("hello world");
        
// }, 2000);

// setTimeout(()=>
// clearInterval(id), 10000); // 2000 is in miliseconds

// question practice of part 7
// 1

// let arr=[1,2,3,4,5];
// let n=arr.length;
// const arrayAverage=(arr)=>{
//     let i=0;
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
// return sum/n;
// }


// 2
// const isEven=(n)=>{
//     if(n%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

//3
// const object={
//     message: 'hello, world!',

//     logMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,1000);


//4
let length=4;
function callback() {
    console.log(this.length);
}
const object={
    length:5,
    method(callback) {
        callback();
    },
}

object.method(callback,1,2);


