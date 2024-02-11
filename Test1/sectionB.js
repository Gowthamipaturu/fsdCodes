// Section B: Coding Exercises (80 marks)
// 1. Write HTML and CSS code to create a simple webpage layout with a header, navigation bar, content area, and footer.

// Ans in sectionB.html

// 2. Implement a JavaScript function called calculateArea that takes two parameters (length and width) and returns the area of a rectangle.

let length =5;
let width = 10;
const area= length*width;
console.log("AreaOfRectangle:", area);

// 3. Create a React component called Counter that displays a counter value and two buttons to increment and decrement the counter.

// Ans in React sectionb-app(app.js)

// 4. Develop a React application with routing/navigation that consists of two pages: Home and About. Create navigation links to switch between these pages.

// Ans in React sectionb-app



// Section B: Coding Exercises (80 marks)

// 1. Write a JavaScript function called findMax that takes an array of numbers as input and returns the maximum number in the array.
const input=[3,5,4,9,8];
let max=input[0];
for(let i=1; i<input.length; i++){
    if(input[i]>max){
        max=input[i]
    }
}
console.log(max);

// 2. Implement a function called reverseString that takes a string as input and returns the reversed string.

const str="Gowthami";
let reverseStr="";
for(let i= str.length-1; i>=0; i--){
    reverseStr+=str[i];
}
console.log(reverseStr);
// 3. Create an object called person with properties name, age, and gender. Write a function called printPerson that takes the person object as input and prints their details.

const person={
    name: "Gowthami",
    age:30,
    gender: "female"
}
console.log("Person:", person);

// 4. Develop a JavaScript function called countVowels that takes a string as input and returns the number of vowels in the string.

// function vowel_count(str, vCount)
// {
//   const vowelsList = 'aeiouAEIOU';
//   let vCount = 0;
  
//   for(let i=0; i<=str.length; i++)
//   {
//     if (vowelsList.indexOf(str[i])==1)
//     {
//       vCount+=1;
//     }
//   }
//   return vCount;
// }
// console.log(vCount);

// 5. Implement a function called reverseArray that takes an array as input and returns a new array with the elements reversed. (Example: Input: [1, 2, 3], Output: [3, 2, 1])
const inputArr=[1,2,3,4,5];
let reverseArr=[];
for(let i=inputArr.length-1; i>=0; i--){
reverseArr.push(inputArr[i]);
}
console.log(reverseArr);

// 6. Write a function called isPalindrome that takes a string as input and returns true if the string is a palindrome, false otherwise.

let palindrome;
function isPalindrome(str){
    for(let i=str.length-1; i>=0; i--){
        str+= str[i];
    }
    if(str==palindrome){
        console.log(true);
    }else{
        console.log(false);
    }
}
isPalindrome(str)