
//Using of single & Double quotes in Strings
let text="Gowthami's son name is Dheeraj";      //if text has ', we are using "" to represent string
console.log(text);
console.log(text.length);                       //calculates space also
let text1='My daughter name is "Diya"';         //text has "", so we have to use ' to represent
console.log(text1);
text1="My daughter name is \"Diya\"";           //Escape Charecter(\)
console.log(text1);

//Using "+" & "`"(backQuotes) in strings
let n= "Gowthami";
let ln="Lakshmipathy";
let a= 30;
let p= "homeMaker";
let c="Hyderabad";
let out=(n+ln+a+p+c);
console.log(out);           // out: GowthamiLakshmipathy30homeMakerHyderabad
console.log(n+" "+ln+" "+a+" "+p+" "+c);        //need to give " "("space") to add strings. out:Gowthami Lakshmipathy 30 homeMaker Hyderabad
console.log(n+ln+"is"+a+"years old & she is a"+p+"lives in"+c);     //out: GowthamiLakshmipathyis30years old & she is ahomeMakerlives inHyderabad
console.log(n+" "+ln+" "+"is"+" "+a+"years old & she is a"+" "+p+ " "+"lives in"+" "+c); //out: Gowthami Lakshmipathy is 30years old & she is a homeMaker lives in Hyderabad
console.log(`${n} ${ln} is ${a} years old & she is a ${p} lives in ${c}`); //out: Gowthami Lakshmipathy is 30 years old & she is a homeMaker lives in Hyderabad
console.log(`Gowthami's Son name is "Dheeraj"`); // we can use both ' & "" inside the `


//String Methods
const myName = "Gowthami";
//string.length()
console.log(myName.length);                      //length is calculating from 1
//string.slice()
console.log(myName.slice(0,3));                  //index starts from 0. 
console.log(myName.slice(1,5)); //(1,5)1st parameter included & 2nd parameter excluded        
console.log(myName.slice(-4));               //counts from last char as -1,-2,-3....
console.log(myName.slice(-5,-1));            //o/p will get from -5 to -1(excluded)
console.log(myName.slice(0,2)+myName.slice(-2)); //slicing & adding required charecters
//string.toUpperCase()
console.log(myName.toUpperCase());           //uppercase
//string.toLowerCase()
console.log(myName.toLowerCase());           //lowercase
//string.substring()
console.log(text.substring(11));        //substring is also same as slice, without -ve nos.
console.log(text.substring(0,20));      //In slice:both parameters(indexvalue,indexvalue), In sbstring(indexvalue,length of string from indexvalue) 


//////Use of Regular Expression(i,g flag)////////
//*string.replace is caseSensitive,In this case won't change from  "Microsoft" to w3schools.
//replace(): replaces only the first match with caseSensitive
//**Insensitive flag (i flag):To replace caseInsensitive,use regularExpression with an /i flag
//***Global flag(g flag): To replace all matches,use a regularExpression with /g flag 
//****GlobalInsensitiveFlags: To replace& caseInsensitive, use /gi or /ig flags

let link="please visit Microsoft microsoft Microsoft";
//string.replace()
let newlink=link.replace("microsoft","w3schools"); 
console.log(newlink);       //out: please visit Microsoft w3schools Microsoft
let newlink1=link.replace(/microsoft/i,"w3schools");
console.log(newlink1);      //please visit w3schools microsoft Microsoft
let newlink2=link.replace(/Microsoft/g,"w3schools");
console.log(newlink2);      //please visit w3schools microsoft w3schools
let newlink3=link.replace(/microsoft/ig,"w3schools");
console.log(newlink3);      //please visit w3schools w3schools w3schools

let w1= "Diya";
let w2= "Dheeraj";
//String.concat()
console.log(w1.concat(w2));     //DiyaDheeraj
console.log(w1.concat(" ",w2)); //Diya Dheeraj
console.log(w1.concat(" ","and"," ",w2)); //Diya and Dheeraj
console.log(`${w1} and ${w2}`);     //Using of ` out:Diya and Dheeraj

//string.trim()
let t1= "      GowthamiLp      ";
console.log(t1.length);     // length: 22
let t2= t1.trim();          //trim() removes white space at start & end of the string
console.log(t2);            // GowthuLp
console.log(t2.length);     // length: 10
//string.trimStart()
let t3= t1.trimStart();
console.log(t3);            //GowthuLp
console.log(t3.length);     // length: 16
//string.trimEnd()
let t4= t1.trimEnd();
console.log(t4);            //     GowthuLp
console.log(t4.length);     // length: 16
//string.padding****padStart(), padEnd()
let text5 = "5";
let padded = text5.padStart(4,"0");    //(4,"0")here 4 is length of string, 0 is padding
console.log(padded);                   // 0005
let padded1 = text5.padEnd(5,"*");     //(5,"*")here 5 is length, * is padding
console.log(padded1);                  //5****

let mobileNo= "9876543210";
//output *******210
const slicePart= mobileNo.slice(-2);
console.log(slicePart);
const output= slicePart.padStart(10,"*"); //here we know the string length is 10
console.log(output);
//If we don't know the length of string****ShortHand
const output1= mobileNo.slice(-2).padStart(mobileNo.length,"*");
console.log(output1);

///****split*****/
let t5= "Gowthami lakshmipathy, dheeraj diya";
let splitData= t5.split(",");
console.log(splitData);         //[ 'Gowthami lakshmipathy', ' dheeraj diya' ]
let splitData1= t5.split(" ");
console.log(splitData1);        //[ 'Gowthami', 'lakshmipathy,', 'dheeraj', 'diya' ]

















