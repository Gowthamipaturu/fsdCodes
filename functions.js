//Event is something the browser does/ a user does
//Function is a block of code designed to perform a particular task. With functions you can reuse code,that can be used many times.

// const sum=(a,b)=>{
//     console.log(a+b)
// }                           //Addition function
// sum(9,16);              //we can use the same function for differnt values repeatedly
// sum(58,48);
// let x=10;
// let y=43;
// sum(x,y);               //Variables mentioning inside the() are Parameters

// const sub=(a,b)=>{
//     console.log(a-b);
// }                           //subtraction 
// sub(58,5);

// function sum1(x,y,z){
//     return(x+y+z);         //old version of function code
// }
// // sum1(7,9,4);
// sum1(2,6);                   //Display as NaN(not a no.)
// function sum1(x,y,z=0){
//     console.log(x+y+z);
// }
// sum1(2,6);                  //default z value is 0, so o/p value is 8.


//Greetings function////////
const greeting=(greet)=>{
    console.log(`hi guys ${greet}`)
}

greeting("Good Morning")
greeting("Good Afternoon")
greeting("Good Evening")
