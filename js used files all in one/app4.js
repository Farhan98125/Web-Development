    // // to do app
    // let todo=[];
    // let req=prompt("enter your request");
    // while(true){
    //     if(req=="quit"){
    //         console.log("quitting app");
    //         break;
    //     }
    //     if(req=="list"){
    //         console.log("------------");
    //         // to print the elements in the list 
    //         for(let i=0;i<todo.length;i++){
    //             console.log(i,todo[i]);
    //         }
    //         console.log("------");
    //     }
    //     else if(req=="add"){
    //         let task=prompt("enter your task you want to add ");
    //         todo.push(task);
    //         console.log("task added");
    //     }
    //     else if(req=="delete"){
    //         let index=prompt("enter the index of the task you want to delete");
    //         if(index>=0 && index<todo.length){
    //             todo.splice(index,1);
    //             console.log("task deleted");
            
    //         }
    //     }
    //     // take req again and again
    //     req=prompt("enter your request");
    // }

    


    // questions 
    //1 Write a JS program  to delete all occurrences of element‘num’inagivenarray.Example:ifarr=[1,2,3,4,5,6,2,3]&num=2
    // let num=2;
    // let arr=[1,2,3,4,5,6,2,3];
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]==num){
    //         arr.splice(i,1);
    //     }
    // }
    // console.log(arr);

    //2
    // let num=287152;
    // count=0;
    // while(num>0){
    //     count++;
    //     num=Math.floor(num/10);
    //     }
    //     console.log(count);


    //3
    // let num=287152;
    // let sum=0;
    // while(num>0){
    //     lastDigt=num%10;
    //     sum+=lastDigt;
    //     // to update
    //     num=Math.floor(num/10);
    // }
    // console.log(sum);



    //4  factorial of an number
    // let n=prompt("enter number");
    // let fact=1;
    // for(let i=1;i<=n;i++){
    //     fact*=i;
    //     }
    //     console.log(fact);
    



    //5 Find the largest number in an array with only positive numbers
    let arr=[1,2,3,4,5,6];
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
            }
            }
            console.log(max);
    