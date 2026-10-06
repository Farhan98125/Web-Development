let gameSeq=[];
let userseq=[];

let btn=["yellow","red","purple","green"];

let started=false;  // tells that game  start or not
let level=0;

let h2=document.querySelector("h2");

// document is over complete page
// first step
document.addEventListener("keypress",function(){
    // now game is started only once whatever we click multiple buttons
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});

// btn flash function
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
        },100);
}


// step two 
// 1 level up (value change ) 2 button flash 3 bcg white ho jaye
function levelUp(){
    userseq=[];
    level++;
    // level update
    // h2.textContent="Level: "+level;
    h2.innerText=`Level ${level}`;
    // random btn chose from btn arr
    let ranIdx=Math.floor(Math.random()*3);
    // chose color from random index from btn arr
    let randColor=btn[ranIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(ranIdx);
    // console.log(randBtn);
    // console.log(randColor);

    // game sequence
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
    //button flash

}

function checkAns(idx){
     
     if(userseq[idx]==gameSeq[idx]){
        if(userseq.length==gameSeq.length){
            setTimeout(levelUp,1000); 
        }
     }else{
        h2.innerHTML=`Game over ! your score was<b>${level}</b> <br> press any key to started.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
           document.querySelector("body").style.color="white"; 
        },150);

        reset();
     }
}


// step three
function btnPress(){
    //  console.log(this);
     let btn=this;
     btnFlash(btn);

     userColor= btn.getAttribute("id");
     userseq.push(userColor);
     checkAns(userseq.length-1);
     
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userseq=[];
    level=0;
}