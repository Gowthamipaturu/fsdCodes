///////Array & object diff////////////
/////Array//////
const names=["gowthami","lakshmipathy","dheeraj","diya"];
console.log(names);             //[ 'gowthami', 'lakshmipathy', 'dheeraj', 'diya' ]
console.log(names[0]);         //gowthami
names[0]="ammu";
names[4]="mallika";          //*******to add data, we use indexing or push method
console.log(names);             //[ 'ammu', 'lakshmipathy', 'dheeraj', 'diya', 'mallika' ]

////////object//////set of key values////
const studentData={
    name:"gowthami",
    age:30,
    husband:"lakshmipathy",
    father:"Thulasiram",
    mother:"mallika",
    skill:"javaScript"
}
console.log(studentData["name"]);       //gowthami
console.log(studentData["mother"]);     //mallika
////////////or/////////////////
console.log(studentData.name);          //gowthami
studentData.city="hyderabad";     // data will be added(if not)/repalced(if already had data)in the object.
studentData.name="ammu";
console.log(studentData);

/////////////////task to increase age in array object/////////////
const familyData=[
    {name:"gowthami",
    age:30,
    father:"Thulasiram",
    mother:"mallika",
    skill:"javaScript"},
    {name:"lakshmipathy",age:30,father:"muragaiah",mother:"geetha",skill:"exp"},
    {name:"dheeraj",age:4,father:"lakshmipathy",mother:"gowthami",skill:["alphabets","numbers"]},
    {name:"diya",age:2,father:"lakshmipathy",mother:"gowthami",skill:"playing"},
    {name:"jahnavi",age:5,father:"kanakaraju",mother:"priya",skill:["alphabets","numbers"]},
    {name:"vihaan",age:2,father:"nethaji",mother:"anu",skill:["playing"]}
]
familyData[0].age=familyData[0].age+1;
console.log(familyData[0]);          ////age will be 31

///////using for loop//////
for(let i=0;i<=5;i++){
    // console.log(`${familyData[i].age+1}`);
    familyData[i].age+=1;       //31,31,5,3,6,3 only age disply
    console.log(familyData);             //dought
}

