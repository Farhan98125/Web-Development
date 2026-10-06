// QUESTION -- ADD THE FOLLOWING ELEMENTS TO THE CONTAINER USING ONLY JS AND dOm METHODS 
// P WITH RED TEXT THAT SAYS " HEY I AM RED".........

// let para1=document.createElement('p');
// para1.innerText="Hey I'm red!";
// document.querySelector("body").append(para1);

// para1.classList.add("red");

// let h3=document.createElement('h3');

// h3.innerText="Hey I'm blue!";

// document.querySelector("body").append(h3);

// para1.classList.add("blue");

// h3.classList.add("blue");

// let div=document.createElement("div");
// let h1=document.createElement("h1");
// let para2=document.createElement("para2");

// h1.innerText="I'm in a div";
// para2.innerText="ME TOO";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");
// document.querySelector("body").append(div);



// QUESTION NUMBER 1
let button=document.createElement('button');
button.innerText="Click me";
let input=document.createElement('input');

// select the body
document.querySelector("body").append(button);
document.querySelector("body").append(input);

// 2
input.setAttribute("placeholder","username");
button.setAttribute("id","btn");

// 3
 let btn=document.querySelector("#btn");
btn.classList.add("btnstyle");
//4
let h1=document.createElement("h1");
h1.innerHTML="<U> DOM Practice</u>";
h1.classList.add("underline");
document.querySelector("body").append(h1);

// 5
let para=document.createElement("para");
para.innerHTML="Apna college <b>Delta</b> Practice";
document.querySelector("body").append(para);









