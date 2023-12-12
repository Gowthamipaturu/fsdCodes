//Conditional Statements
//If, Elseif, Else, switch
const tomorrow=false;           //user inputs
if(tomorrow==true){             //Need to write condition
    console.log("shopping");
} else{                         
    console.log("at home");
}
//No need to write condition in "Else". If condition not satisfied, by default "else" o/p will considered.

const time=22;
if(time<12){
    console.log("Good Morning!");
} else if(time<16){
    console.log("Good Afternoon");
} else if(time<=20){
    console.log("Good Evening!");
} else {
    console.log("Good Night");              //Need to check logic order everytime
}
