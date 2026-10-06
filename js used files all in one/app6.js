// functions
// function print(name){
//     console.log(name);

// }
// // calling the function
// print("Hello, World!");

// avg of three numbers
// function avgOfThree(a, b, c) {
//     let sum = a + b + c;
//     let average = sum / 3;
//     return average;
//     }
//     // calling the function
//     console.log(avgOfThree(10, 20, 30));


// question practice
//1
// let num=7;
// let arr=[8,9,10,1,2,3,4,5,6,7];
// function large(arr,num) {
//     for(let i=0;i<arr.lenght;i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }   
// }
// large(arr,num);

//2

let str="abcdabcdefgggh";
function unique(str) {
    let uniqueStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === i) {
            uniqueStr += str[i];
            }
            }
}
unique(str);
