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

const r=5;
for(let i=1; i<=r; i++){
    let pattern="*";
    for(j=i; j<r;j++){
        let space="";
        console.log(pattern.repeat(i+1));
        console.log(space.repeat((i+1))+ pattern.repeat(i) );
    }
    // let space = ' '; 
    // console.log(space.repeat((i+1))+ pattern.repeat(i) );
    // console.log(pattern.repeat(i));
}
// let r = 5; 
// for (let i = 1; i <= r; i++) { 
//     let str = "*"; 
//     let space = ' '; 
//     console.log(str.repeat(i * 2 - 1));
//     // console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
// } 

// const num = 5;
// let patt = '';
// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= n - i; j++) {
//         row += ' ';
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         if (j === 1 || j === 2 * i - 1 || i === n) {
//             row += '*';
//         } else {
//             row += ' ';
//         }
//     }
//     str += row + '\n';
// }
// console.log(str);

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

// **Question 3: Count the Occurrences of a Character in a String**

// Write a function `countChar` that takes a string and a character as input and returns the number of times that character appears in the string.

// const string1="Dheeraj"
// let f="D", s="h", o;
// // console.log(first);
// // console.log(second);
// for(let i=0; i<=; i++){
//     // next=first+second;
    
//     console.log(next);
//     first=second;
//     second=next;
// }


// **Question 4: Remove Duplicates from an Array**
// Write a function `removeDuplicates` that takes an array of numbers as input and returns a new array with duplicate values removed.

// **Question 5: Check for Palindrome**
// Write a function `isPalindrome` that takes a string as input and returns `true` if it's a palindrome (reads the same forwards and backward), and `false` otherwise.

