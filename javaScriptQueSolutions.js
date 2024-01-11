//1)Write a JavaScript function to extract a specified number of characters from a string.
//TestData:
//console.log(truncate_string("Robin Singh",4));
//"Robi"

function truncate_string(str, num){
    console.log(str, num);
    return str.slice(0,4);
    }
    console.log(truncate_string("Robin Singh",4));

// function truncate_string(str, num) {
//         return str.slice(0, num);
//     }
//     console.log(truncate_string("Robin Singh", 4));
    

// 2)Write a JavaScript function to convert a string into abbreviated form. 
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

function abbrev_name(str1){
    console.log(str1);
    const splitName=str1.split(" ");
    console.log(splitName);
    return `${splitName[0]} ${splitName[1][0]}.`
}
console.log(abbrev_name("Robin Singh"));

// function abbrev_name(name) {
//     const parts = name.split(" ");
//     return parts[0] + " " + parts[1][0] + ".";
// }
// console.log(abbrev_name("Robin Singh"));


// 3)Write a JavaScript function that hides email addresses to prevent unauthorized access. 
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

function protect_email(emailId){
console.log(emailId);
const splitId=emailId.split("@");
console.log(splitId);
const idPart=splitId[0].slice(0,5);
console.log(idPart);
return `${idPart}...@${splitId[1]}`
}
console.log(protect_email("robin_singh@example.com"));

// function protect_email(email) {
//     const parts = email.split("@");
//     const username = parts[0];
//     const domain = parts[1];
//     const hiddenUsername = username.slice(0, 5) + "..." + username.slice(-2);
//     return hiddenUsername + "@" + domain;
// }
// console.log(protect_email("robin_singh@example.com"));


// 4)Write a JavaScript function to capitalize the first letter of a string. 
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

function capitalize(str2){
console.log(str2);
// console.log(str2[0].toUpperCase());
return str2[0].toUpperCase()+str2.slice(1);
}
console.log(capitalize('js string exercises'));

// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(capitalize('js string exercises'));

// 5)Write a JavaScript function to uncapitalize the first character of a string. 
// Test Data :
// console.log(Uncapitalize('Js string exercises'));
// "js string exercises"

function Uncapitalize(str3){
console.log(str3);
return str3[0].toLowerCase()+str3.slice(1);
}
console.log(Uncapitalize('Js string exercises'));

// function uncapitalize(str) {
//     return str.charAt(0).toLowerCase() + str.slice(1);
// }
// console.log(uncapitalize('Js string exercises'));

// 6)Write a function truncateText that takes a string and a maximum length as input and returns a truncated version of the string if it exceeds the maximum length, adding "..." at the end.
// 7)console.log(truncateText("This is a long sentence.", 10));
// Output: "This is a..."
// console.log(truncateText("Short text.", 15)); 
// Output: "Short text."

function truncateText(str4,num){
console.log(str4);
console.log(str4.length);
if(str4.length>num){
   return `${str4.slice(0,num)}...`;
}else{
    return str4;
}
}
console.log(truncateText("This is a long sentence.", 10));
console.log(truncateText("Short text.", 15));

// function truncateText(str, maxLength) {
//     if (str.length > maxLength) {
//         return str.slice(0, maxLength) + "...";
//     }
//     return str;
// }
// console.log(truncateText("This is a long sentence.", 10));
// console.log(truncateText("Short text.", 15));

// 8)Time of Day Greeting
// Write a function greetTimeOfDay that takes the current hour as input (in 24-hour format) and prints a greeting based on the time of day: "Good morning" for hours 6-11, "Good afternoon" for hours 12-17, and "Good evening" for hours 18-23.

function greetTimeOfDay(hour){
console.log(hour);
if(hour>=6&&hour<=11){
    console.log("Good morning");
} else if (hour >= 12 && hour <= 17) {
    console.log("Good afternoon");
} else if (hour >= 18 && hour <= 23) {
    console.log("Good evening");
} else{
    console.log("Good night");
}
} 

// 9)Leap Year Check
// Write a function isLeapYear that takes a year as input and prints "Leap year" if the year is divisible by 4 and not divisible by 100, or if it's divisible by 400. Otherwise, print "Not a leap year."

function isLeapYear(year){
if(year%4==0 && year%100!=0 || year%400==0){
    console.log("Leap year");
} else{
    console.log("Not a leap year");
}
}

// 10)Positive, Negative, or Zero
// Write a function positiveNegativeZero that takes a number as input and prints "Positive" if the number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.

function positiveNegativeZero(num){
   if(num==0) {
    return`Zero`;
   }else if(num>0){
    return `Positive`;
   } else{
        return`Negative`
   }
}
console.log(positiveNegativeZero("Zero"));
console.log(positiveNegativeZero("Positive"));
console.log(positiveNegativeZero("Negative"));

// function positiveNegativeZero(num) {
//     if (num > 0) {
//         console.log("Positive");
//     } else if (num < 0) {
//         console.log("Negative");
//     } else {
//         console.log("Zero");
//     }
// }

// 11)Grade Calculator
// Write a function calculateGrade that takes a student's score as input and prints their corresponding grade: "A" for scores 90 and above, "B" for scores 80-89, "C" for scores 70-79, "D" for scores 60-69, and "F" for scores below 60.

// function calculateGrade(sScore){
// }
let sScore= 55;
if(sScore>=90){
    console.log("gradeA");
} else if(sScore>=80){
    console.log("gradeB");
} else if(sScore>=70){
    console.log("gradeC");
} else if(sScore>=60){
    console.log("gradeD"); 
}else{
    console.log("gradeF");
}

// 12)Even or Odd
// Write a function evenOrOdd that takes an integer as input and prints "Even" if the number is even, and "Odd" if the number is odd.

// const integer = 7;
function evenOrOdd(integer) {
if(integer %2==0){
    console.log("Even")
}else{
    console.log("odd")
}   
}

// 13)Age Eligibility
// Write a function checkAge that takes an age as input. The function should return "Allowed" if the age is between 18 and 65 (inclusive), and "Not allowed" otherwise.

// const age = 66;
function checkAge(age){
if(age>=18 && age<=65){
    console.log("Allowed");
}else{
    console.log("Not Allowed");
}
}

// 14)Ticket Pricing
// Write a function calculateTicketPrice that takes two parameters: a person's age and whether they have a student ID (true or false). If the person is under 18 or a student, they get a discount. If both conditions are met, return "Discounted price," otherwise return "Regular price."

// let age1= 17;
function calculateTicketPrice(age1,studentId){
// let studentId = true;
if(age1<18 || studentId == true){
    console.log("Discounted Price")
}else{
    console.log("Regular Price")
}
}

// 15)Username Validation
// Write a function validateUsername that takes a username as input. The function should return "Valid" if the username has at least 6 characters and contains only letters and numbers. Otherwise, return "Invalid."

function validateUsername(userName,alphaNumeric){
if(userName.length>=6&&alphaNumeric==true){
    return `Valid`
}else{
    return`Invalid`
}
}
console.log(validateUsername("Valid"));
console.log(validateUsername("Invalid"));

// 16)Color Selection
// Write a function selectColor that takes a color choice ("red", "blue", "green") and whether the color is available (true or false). If the color is available and the choice is "blue" or "green," return "Selected." If the choice is "red," return "Not available." For any other choice, return "Invalid choice."

function selectColor(color, isAvailable){
if(isAvailable){
    if(color=="blue"||color=="green"){
        console.log("Selected");
    }else if(color=="red"){
        console.log("Not available");
    }else{
        console.log("Invalid choice");
    }
}else{
    console.log("color not available")
}
}
// 17) Adding and Removing Elements
// Create an array called `fruits` with initial values ["apple", "banana"]. Using the appropriate array methods, perform the following actions:
// - Add "orange" to the end of the array.
// - Remove the last element from the array.
// - Add "grape" to the beginning of the array.
// - Remove the first element from the array.
// Print the final array after each step.

const fruits=["apple","banana"];
console.log(fruits);
const add=(fruits.push("orange"));
console.log(add);           ///3
console.log(fruits);        ///[ 'apple', 'banana', 'orange' ]
const remove=(fruits.pop());
console.log(remove);        ///orange
console.log(fruits);        ///[ 'apple', 'banana' ]
const add1=(fruits.unshift("grape"));
console.log(add1);          //3
console.log(fruits);        // [ 'grape', 'apple', 'banana' ]
const remove1=(fruits.shift());
console.log(remove1);       // grape
console.log(fruits);        // [ 'apple', 'banana' ]

// const fruits = ["apple", "banana"];
// fruits.push("orange");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.unshift("grape");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// 18)Stack Operations
// Implement a stack using an array. Create a stack called `myStack` and perform the following operations:
// - Push the values 10, 20, and 30 onto the stack.
// - Pop the top element from the stack.
// - Push the value 40 onto the stack.
// Print the stack after each operation.

const myStack=[];
console.log(myStack);               //[]
const add2=(myStack.push(10,20,30));
console.log(add2);                  ////3
console.log(myStack);               /////[ 10, 20, 30 ]
const remove2= (myStack.pop());
console.log(remove2);               ////30
console.log(myStack);               ////[ 10, 20 ]
const add3=(myStack.push(40));      
console.log(add3);                  /////3
console.log(myStack);               /////[ 10, 20, 40 ]

// const myStack = [];
// myStack.push(10);
// myStack.push(20);
// myStack.push(30);
// console.log(myStack);
// myStack.pop();
// console.log(myStack);
// myStack.push(40);
// console.log(myStack);

// 19)Queue Operations
// Implement a queue using an array. Create a queue called `myQueue` and perform the following operations:
// - Enqueue the values "a", "b", and "c" into the queue.
// - Dequeue an element from the queue.
// - Enqueue the value "d" into the queue.
// Print the queue after each operation.

const myQueue=[];
console.log(myQueue);               //[]
const enq=(myQueue.push("a","b","c"));
console.log(enq);                   ///3
console.log(myQueue);               //[ 'a', 'b', 'c' ]
const deq=(myQueue.pop());          
console.log(deq);                   //c
console.log(myQueue);               //[ 'a', 'b' ]
const enq1=(myQueue.push('d'));     
console.log(enq1);                  //3
console.log(myQueue);               //[ 'a', 'b', 'd' ]

// const myQueue = [];
// myQueue.push("a");
// myQueue.push("b");
// myQueue.push("c");
// console.log(myQueue);
// myQueue.shift();
// console.log(myQueue);
// myQueue.push("d");
// console.log(myQueue);

// 20): Shopping List
// Create an empty array called `shoppingList`. Using the appropriate methods, add the items "eggs", "milk", "bread", and "vegetables" to the shopping list. Then, remove the "bread" from the list.
// Print the shopping list after each operation.

const shoppingList=[];
console.log(shoppingList);              ///[]
const add4=(shoppingList.push("eggs", "milk", "bread", "vegetables"));
console.log(add4);                      ///4
console.log(shoppingList);              //[ 'eggs', 'milk', 'bread', 'vegetables' ]
const remove3=(shoppingList.splice(2,1));
console.log(remove3);                   //[ 'bread' ]
console.log(shoppingList);              //[ 'eggs', 'milk', 'vegetables' ]

// const shoppingList = [];
// shoppingList.push("eggs");
// shoppingList.push("milk");
// shoppingList.push("bread");
// shoppingList.push("vegetables");
// console.log(shoppingList);
// shoppingList.splice(shoppingList.indexOf("bread"), 1);
// console.log(shoppingList);

