// function one(){
//     return 1;
// }

// function two(){
//     return one() +one();
// }

// function three(){
//     let ans= two() + one();
//     console.log(ans);
// }
// three();




// call back hell problems in js


// color change of heading in given time intervel
h1 = document.querySelector("h1");

// function changeColor(color, delay,nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         // jab phela color change hoga thabhi next color change hoga bcz all colors are depend on each other
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// here we do nesting --- arise an problem of call back hell 

// changeColor("red", 1000,()=>{
//     changeColor("green", 1000,()=>{
//         changeColor("blue", 1000);
//     })
// });




// SOLVE THIS WITH PROMISE 
function changeColor(color,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            h1.style.color=color;
            // to reject the promise
            let num=Math.floor(Math.random() * 5) +1;
            if(num >3){
                reject("promise was reject");
            }
            console.log(`color changed to ${color}!`)
            resolve("color changed");
        },delay);
    });
}


// minimization with the help of await function
async function demo(){
    // to handle the err which effects the last items we use handling  request by using try and catch
    // now the remaing code will run which is not come in try and catch 
    try{

await changeColor("red",1000);
await changeColor("green",1000);
await changeColor("blue",1000);
await changeColor("pink",1000);
await changeColor("orange",1000);

    } catch(err){
        console.log("err caught");
        console.log(err);

    }
let a=5;
console.log(a);
console.log(a+7);

}

// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("green",1000);
// })
// .then(()=>{
//     console.log("green color was completed");
// });



// setTimeout(()=>{
//     h1.style.color="red";
// },1000);

// h1=document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color="orange";
// },2000);

// h1=document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color="green";
// },3000);




// promises
// function saveDb(data,succes,failure){
//     let internetSpeed=Math.floor(Math.random() * 10) +1;
//     if(internetSpeed >4){
//         succes();
//     }else{
//         failure();
//     }
// }

// saveDb(
//     "apna college",
//     ()=>{
//         console.log("succes1");
//         saveDb(
//             "helloworld",
//             ()=>{
//                 console.log("success2");
//             saveDb(
//                 "farhan",
//                 ()=>{
//                     console.log("succes3");
//                 },
//                 ()=>{
//                     console.log("failure3");
//                 }
//             );
//         },
//         ()=>{
//             console.log("fa3");
//         }
//         );
//     },
//     ()=>{
//         console.log("f");
//     }
// );


// promise 
// function saveDb(data){
//     return new Promise((reslove,reject) => {
//         let internetSpeed=Math.floor(Math.random() * 10) +1;
//         if(internetSpeed >4){
//             reslove("data was saved");
//         }else{
//             reject("data not saved");
//         }
//  } );
// }

// let request=saveDb("farhan");
// request.then(()=>{
//     console.log("promise was resolved");
// })
// .catch(()=>{
//     console.log("promise was rejected")
// });





