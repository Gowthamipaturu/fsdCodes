//list of data called an Array.
//An array can hold many values under a single name, and you can access the values by referring to an index number.
//Array is the combination of multiple datatypes(like nos,strings, boolean etc.,)
//Array will be declared with Const.
const arr=[1,2,3,4,5];
const data=["gowthami","lakshmipathy","dheeraj","diya", true];
const arr1=[1,2,"gowthami",3,"diya",5];
console.log(arr[0]);        // output: 1 (index value "0")
console.log(data[2]);       // dheeeraj
console.log("before", arr); //[1,2,3,4,5]
///adding Elements/list to array using arrayIndex value
arr[0]=5;                   //changing value of particular index
arr[5]=6;                   //adding data to array using index
console.log("after",arr);   //[5,2,3,4,5,6]
///adding Elements/list to array using push (EndingPosition)
arr.push(58);               // adding data at End of an array using push 
arr.push(48);
console.log("push",arr);   //[5,2,3,4,5,6,58,48]
///removing Elements/list from array using pop(EndingPosition)
arr.pop();                 // Remove data at end
console.log("pop",arr);     //[5,2,3,4,5,6,58]
///adding Elements/list to array at starting position using "unShift"
arr.unshift(100);           // to add at starting
console.log("unshift",arr); //[100,5,2,3,4,5,6,58]
///Removing Elements/list from array at starting position using "Shift"
arr.shift();                //to remove at starting
arr.shift();                
console.log("shift",arr);   //[2,3,4,5,6,58]
///array.length
console.log(arr.length);    // 6

///****split*****/
let t5= "Gowthami lakshmipathy, dheeraj diya";
let splitData= t5.split(",");
console.log(splitData);         //[ 'Gowthami lakshmipathy', ' dheeraj diya' ]
let splitData1= t5.split(" ");
console.log(splitData1);        //[ 'Gowthami', 'lakshmipathy,', 'dheeraj', 'diya' ]

////***array.join()*** */
const data1 =["gowthami","lakshmipathy","dheeraj","diya", true];
console.log(data.join());       //o/p: gowthami,lakshmipathy,dheeraj,diya,true
console.log(data.join("*"));    //o/p: gowthami*lakshmipathy*dheeraj*diya*true 
console.log(data.join("/"));    //o/p: gowthami/lakshmipathy/dheeraj/diya/true
console.log(data.join(" "));    //o/p: gowthami lakshmipathy dheeraj diya true

//////concatenating//////
let girls= ["honey","janu","diya","junnu"];
let boys= ["dheeraj","vihaan","vivaan",];
const kids=girls.concat(boys,"abhi");     //we can add arrays with elements also.
console.log(kids);    //['honey','janu','diya','junnu','dheeraj', 'vihaan','vivaan','abhi']

///index position of array elements(child array)/////
const arr2=[1,3,5,"dheeraj",[2,4,6,["diya","junnu"]]];
console.log(arr2[0]);           //1
console.log(arr2[3]);           //dheersj
console.log(arr2[4]);           //[ 2, 4, 6, [ 'diya', 'junnu' ] ]
console.log(arr2[4][3]);        //[ 'diya', 'junnu' ]
console.log(arr2[4][3][0]);     //diya

///flat////
const myArr= [[1,2],[3,4],[5,6,[7,8,9],10,11]];
const newArr= myArr.flat();
console.log(newArr);            //[ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ], 10, 11 ]
const newArr1= myArr.flat().flat();
console.log(newArr1);           //[1,2,3,4,5,6,7,8,9,10,11]

////slice////
girls= ["honey","janu","diya","junnu"];
console.log(girls.slice(1));        ////[ 'janu', 'diya', 'junnu' ]
console.log(girls.slice(-3,-1));       //[ 'janu', 'diya' ]
console.log(girls.slice(1,3));         //[ 'janu', 'diya' ]

/////************when performing every method, it will extract the elements & apply the method then we get the result as a new array. */

/////splice////
girls= ["honey","janu","diya","junnu"];
const out=girls.splice(1,0, "dheeraj");
console.log(out);       // []
console.log(girls);    ///[ 'honey', 'dheeraj', 'janu', 'diya', 'junnu' ]
const out1=girls.splice(2,1, "dheeraj");
console.log(out1);      ///['janu']
console.log(girls);    ///[ 'honey', 'dheeraj', 'dheeraj', 'diya', 'junnu' ]
const out2=girls.splice(2,2);
console.log(out2);      ///['dheeraj','diya']
console.log(girls);     ///[ 'honey', 'dheeraj', 'junnu' ]

//*********splice methode will be used only for array's. In splice existing array will be modified/updated & returns the output to the existing array itself, but in slice elements will be extract& returns a new array as output. In splice(parameter1,parameter2,parameter3) 
        //here, p1 is index position where the element needs modify,*/
        //p2 indicates, how many elements needs to remove at the p1 specified index*/
        //p3 indicates, elements to be add*/


