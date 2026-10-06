// let btn=document.querySelector("button");
// console.dir(btn);

// for multiple btns ALL
// let btns=document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick=sayHello;
//     btns.onmouseenter=function(){
//         console.log("you entered a button");
//     };
//     console.dir(btn);  
// }
// function sayHello(){
//     // alert('hello');
//     console.log("Hello");
// }
// function sayName(){
//     // alert('hello');
//     console.log("apna college");
// }


// onclick prop asign to function
// btn.onclick=function(){
//     console.log("Button clicked");
// }
 
// normal
// 
// btn.onclick=sayHello;



// event listener
// we can call multiple events together 
// for(btn of btns){
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);

// }  



// activity- color change 
//
// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     // to set the rgb in the h3 heading to change the color
//     let h3=document.querySelector("h3");
//     let randomColor=generateRandomNumber();
//     h3.innerText=randomColor;

//     // for div color change
//     let div=document.querySelector("div");
//     // we can use all properties of css
//     // div.style.borderColor=randomColor;
//     div.style.backgroundColor=randomColor;

//     console.log("color updated");
// });

// // function to generate random number
// // we need to generate three r g b---- range 0 to 255
// function generateRandomNumber(){
//     let red=Math.floor(Math.random()* 255);
//     let green=Math.floor(Math.random()* 255);
//     let blue=Math.floor(Math.random()* 255);

//     // variable to store all these three colors
//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// }



// this event listener
// let btn=document.querySelector("button");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");
// let p=document.querySelector("p");
// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// }

// btn.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);





//input event-- store the input in para
// let inp=document.querySelector("input");
// let p=document.querySelector("p");
// p.style.borderBlock="red";

// // 
// inp.addEventListener("input",function(){
//     console.log(this.value);
//     p.innerText=this.value;
// });






// ------------------------------------------------------------------------------------------
// practice Questions
// 1


