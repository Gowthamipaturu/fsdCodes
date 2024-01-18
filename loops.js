const even =[2,4,6,8]
for (let i=0;i<=3;i++){
    console.log(even[i])
}                       ////2   4   6   8


for (let i=0;i<=3;i++){
    console.log(even[i]*5)
}                       ///10   20  30  40

for(let i=1; i<=10; i++){
    console.log(2*i)
}               ////2,4,6,8,10,12,14,16,18,20

////////2 Table////////////
for(let i=1; i<=10; i++){
    console.log(`2 X ${i} = ${2*i}`)
}        

///////Reverse table///////
for(let i=10; i>=1; i--){
    console.log(`2 X ${i} = ${2*i}`)
}    

const table=(num)=>{
    for(let i=1; i<=10;i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}

table(2)
table(4)

const table1=(num,upto)=>{
    for(let i=1; i<=upto;i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}

table1(2,5);        //2nd table upto 2X5=10
table1(6,10);       //6th table upto 6X10=60
table1(4,15);       //4th table upto 4X15=60

/////Even nos. in an array////////
const nums=[2,3,6,7,8,10,14,58,97,48];
for(let i=0;i<=nums.length;i++){
    // console.log(nums[i]);
    if(nums[i]%2==0){
        console.log(`${nums[i]} is an even no.`)    // ex: 48 is an even no.
    }else{
        console.log(`${nums[i]} is an odd no.`)     // ex: 97 is an odd no.
        
    }
}

