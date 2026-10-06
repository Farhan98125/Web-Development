// Array Methods
//  let arr=[1,2,3,4,5];
 // for each 
//  let print=function(el){
//     console.log(el);
//  }
//  arr.forEach(print);
//  arr.forEach(function(el){
//     console.log(el);
//     })


//      arr.forEach((el)=>console.log(el));


// map
// let arr=[1,2,3,4,5];
// let arr2=arr.map(function(el){
//     // return el*2;
//     })
//     console.log(arr2); 


//EVERY
// let arr=[1,2,3,4,5];
// arr.every((el)=>
//     (el%2==0));

// reduce  
// let arr=[1,2,3,4];
// let sum=arr.reduce(function(acc,el){
//     // print the acc values  
//     console.log(acc);
//     return acc+el;
//     },0);
//     console.log(sum);

// max
// let arr=[1,2,3,4,5];
// let ans=arr.reduce((max,el)=>{
// if(el>max){
//     return el;
// }
// else{
//     return max;
// }
// });
// console.log(ans);


// default parameters
// function sum( a,b=3){
//     return a+b;
// }


// spread
// let arr=[1,2,3,4,5,2,4,6,4,7,7,8,2,36,5,5,];
// // Math.min(...arr);
// let newArr=[...arr];
// console.log(newArr);


// object spread
// let obj1={name:"Rahul",age:25};  
// let obj2={city:"Delhi",country:"India"};
// let obj3={...obj1,...obj2,id:123};
// console.log(obj3);


// arr in object
// let arr=[1,3,4];
// let obj={...arr};
// console.log(obj);   // key val


// Rest
// function sum(...args){
//     return args.reduce((acc,el)=>acc+el);
//     }
//     console.log(sum(1,2,3,4,5));  // 15





// -------------Questions Practice --------------//
//1
// let arr=[1,2,3,4,5];
// let square=arr.map((el)=>{
//     console.log(el*el);
// });

// let sum=arr.reduce(()=>{
    
//     return sum+el;
    
// });
// console.log(sum);


     