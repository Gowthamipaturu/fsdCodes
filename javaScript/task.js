//**********Task**********//
//output: HelloWorld
let text="helloworld!";
// let caps=text.toUpperCase();
// let small=text.toLowerCase();
console.log(text.toUpperCase());
console.log(text.toLowerCase());
let output=text.charAt(0).toUpperCase()+ text.slice(1,5)+text.charAt(5).toUpperCase()+ text.slice(-5);
console.log("output:",output);



//**********Task*********//
//input: gowthamilakshmipathy.k@gmail.com
//output1: gow******************@gmail.com
//output2: gow***************y.k@gmail.com


// let emailId ="gowthamilakshmipathy.k@gmail.com";
// console.log(emailId);
// let splitData2 = emailId.split("@");
// console.log("splitData",splitData2);
// let idPart = splitData2[0];
// let domain = splitData2[1];
// let firstPart= idPart.slice(0,3);
// console.log(firstPart);
// let firstFinalOut= firstPart.padEnd(firstPart.length,"*");
// console.log(firstFinalOut);
// let finalOut = firstFinalOut +"@"+ domain;
// console.log(finalOut);

// //******ShortHand */

let emailId= "gowthamilakshmipathy.k@gmail.com"
let splitData3 = emailId.split("@");
console.log("splitData",splitData3);
let idPart1 = splitData3[0];
let domain1 = splitData3[1];
let firstPart1= idPart1.slice(0,3);
const finalOut1= firstPart1.padEnd(idPart1.length,"*")+"@"+domain1;
console.log(finalOut1);         //gow*******************@gmail.com

// //output2: gow***************y.k@gmail.com
let emailId1= "gowthamilakshmipathy.k@gmail.com"
let splitData4 = emailId1.split("@");
console.log("splitData",splitData4);
let idPart2 = splitData4[0];
let domain2 = splitData4[1];
let firstPart2= idPart2.slice(0,3);
const finalOut2= firstPart2.padEnd(idPart2.length,"*")+idPart2.slice(-3)+"@"+domain2;
console.log(finalOut2);         //gow*******************y.k@gmail.com

