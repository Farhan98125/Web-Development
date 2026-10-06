// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("div is clicked");
// });

// ul.addEventListener("click",function(event){
//     // to stop the event bubbling
//     event.stopPropagation();
//     console.log("ul is clicked");
// });



// activity
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    // to add items in list
    let items=document.createElement("li");
    items.innerText=inp.value;

    // to add delete button with all
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    items.appendChild(delbtn);
    ul.appendChild(items);
    inp.value=""; // to clear the input field

});
// note these events not apply on the list which we made--for this we use event delegation

// we want to delete the items when we click delte
// parent of delete class is li so we to delete its parents item
// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         // to acess the parent we use navigations
//         let par=this.parentNode;
//         console.log(par);
//         par.remove();

    
//     });
// }



// event delegation---event bubbling use
// we can use event delegation to add event listener to all the elements which are dynamically created
// we can add event listener to the parent element and then use event.target to acess the element which
// triggered the event
ul.addEventListener("click",function(event){
    // to acess the element which triggered the event
    // let listitem=event.target;
    // node name tells type what we click
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentNode;
        listitem.remove();
        console.log("delete");
    }
    console.log();

    
});
