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

const n5=12345678;
let count=1;
for(let i=1; i<=n5.length; i++){
count++;
}
console.log(count);

// **8. Print Pattern:**
// Write a program to print a pattern of stars using a `for` loop.





// **Question 1: Reverse a String**

// Write a function `reverseString` that takes a string as input and returns the reverse of that string.
