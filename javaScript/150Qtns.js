// ForLoop Questions

// **1. Sum of Natural Numbers:**
// Write a program to calculate the sum of natural numbers from 1 to `n` using a `for` loop.

const n=8;
let sum=0;
for(let i=1; i<=n;i++){
    sum+=i;
}
console.log(sum);

// **2. Factorial of a Number:**
// Write a program to calculate the factorial of a given number `n` using a `for` loop.

const n1=10;
let factorial=1;
for(let i=1; i<=n; i++){
    factorial*=i;
}
console.log(factorial);

// **3. Fibonacci Sequence:**
// Generate and print the first `n` terms of the Fibonacci sequence using a `for` loop.

const n2=10;
// let first=0;
// let second=1;
// let next;
let first=0, second=1, next;
console.log(first);
console.log(second);
for(let i=0; i<=n2; i++){
    next=first+second;
    console.log(next);
    first=second;
    second=next;
}

// **4. Print Multiplication Table:**
// Write a program to print the multiplication table of a given number `n` using a `for` loop.

const n3=8;
for(let i=1; i<=10; i++){
    console.log(`${n3}X${i}=${n3*i}`);
}

// **5. Reverse a String:**
// Write a program to reverse a string using a `for` loop.
const str="Gowthami";
let reverseStr="";
for(let i= str.length-1; i>=0; i--){
    // reverse=str[i];
// i
// m
// a
// h
// t
// w
// o
// G
    // reverse+=str[i];
    // i
    // im
    // ima
    // imah
    // imaht
    // imahtw
    // imahtwo
    // imahtwoG
    // console.log(reverse);
    reverseStr+=str[i];
}
console.log(reverseStr);    //imahtwoG

// **6. Prime Number Check:**
// Write a program to check if a given number `n` is prime using a `for` loop.

const n4=7;
let isPrime=true;
for(let i=2; i<n4; i++){
    if(n4%i==0){
        isPrime=false;
        break;
    }
}
console.log(isPrime);

// **7. Count Digits in a Number:**
// Write a program to count the number of digits in a given number `n` using a `for` loop.

// const n5=12345678;
// let count=1;
// for(let i=1; i<=n5.length; i++){
// count++;
// }
// console.log(count);

// **8. Print Pattern:**
// Write a program to print a pattern of stars using a `for` loop.
// const rows=5;
// for(let i=1; i<=rows; i++){
//     let pattern="*";
//     console.log(pattern);
// }
const columns=5;
for(let i=1; i<=columns; i++){
    let pattern="*";
    console.log(pattern.repeat(i));
}

// task(EqualateralTriangle)
let r = 5; 
for (let i = 1; i <= r; i++) { 
    let str = "*"; 
    let space = ' '; 
    console.log(str.repeat(i * 2 - 1));
    // console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
} 

// **9. Find Largest Element in an Array:**
// Write a program to find the largest element in an array using a `for` loop.

const arr=[3,5,4,9,8];
let largest=arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>largest){
        largest=arr[i]
    }
}
console.log(largest);

// **10. Reverse an Array:**
// Write a program to reverse the elements of an array using a `for` loop.
const inputArr=[2,4,6,8,10];
let reverseArr=[];
for(let i=inputArr.length-1; i>=0; i--){
reverseArr.push(inputArr[i]);
}
console.log(reverseArr);

// **String Methods:**

// 1. How do you find the length of a string in JavaScript?
    //@ String.length()
// 2. What method is used to convert a string to lowercase in JavaScript?
    //@ String.toLowerCase()
// 3. Explain the purpose of the `toUpperCase()` method in JavaScript.
    //@ To Convert lower to uppercase
// 4. How can you check if a string contains a specific substring in JavaScript?
    //@ String.substring(indexValue, length of the string from index value)
// 5. What does the `charAt()` method do in JavaScript?
    //@ indeValue of the char in an Array/String
// 6. How do you replace a substring within a string using JavaScript?
    //@ String.replace()
// 7. What method can be used to split a string into an array in JavaScript?
    //@ strng.split()
// 8. How can you remove leading and trailing whitespace from a string in JavaScript?
    //@ Use trim()(removes white space at start & end of the string), trimStart(), trimEnd()
// 9. What method is used to concatenate two strings in JavaScript?
    //@ String.concat()
// 10. How do you check if a string starts with a specific prefix in JavaScript?
    //@ The startsWith() method returns true if a string starts with a specified string. Otherwise it returns false . The startsWith() method is case sensitive.

// **Array Methods:**

// 11. How do you add an element to the end of an array in JavaScript?
    //@ arr[i] or arr.push()
// 12. What method is used to remove the last element from an array in JavaScript?
    // @ arr.pop()
// 13. Explain the purpose of the `push()` method in JavaScript.
    // Adding Elements/list to array using "push()" at the EndingPosition
// 14. How do you find the index of an element in an array in JavaScript?
    // @ arr[i], arr[i][i][i](if array has child arrays)
// 15. What is the difference between `pop()` and `shift()` methods in JavaScript?
    // @ Both are used to remove elements in an array, pop() to remove at the end, shift() to remove at the starting positions.
// 16. How can you reverse the elements of an array in JavaScript?
    // @ arr.reverse()
// 17. In JavaScript, what does the `splice()` method do?
    // @*********splice methode will be used only for array's. In splice existing array will be modified/updated & returns the output to the existing array itself, but in slice elements will be extract& returns a new array as output. In splice(parameter1,parameter2,parameter3) 
        //here, p1 is index position where the element needs modify,*/
        //p2 indicates, how many elements needs to remove at the p1 specified index*/
        // p3 indicates, elements to be add*/
// 18. What method can you use to check if an element exists in an array in JavaScript?
    // @ includes(), indexof() 
// 19. How do you sort an array of numbers in ascending order in JavaScript?
    // @ sort()
// 20. Explain the purpose of the `concat()` method in JavaScript.
    // @ concat() method is used to add 2 arrays as a single array. 
        // Ex: arr1.concat(arr2, elements)  ###we can add arrays with elements also




// **Question 1: Reverse a String**

// Write a function `reverseString` that takes a string as input and returns the reverse of that string.

const strng="Gowthami";
let reverseStrng="";
for(let i=strng.length-1; i>=0; i--){
reverseStrng+=strng[i];
}
console.log(reverseStrng);

// **Question 2: Find the Maximum Number in an Array**

// Write a function `findMax` that takes an array of numbers as input and returns the maximum number from the array.

const input=[6,5,8,9,16];
let maxNo=input[0];
for(i=1; i<input.length; i++){
    if(input[i]>maxNo){
        maxNo=input[i];
    }
}
console.log(maxNo);


