//Variables
//                  Var     Let     Const
// Redeclare        yes     no      no
// Reassign         yes     yes     no

//Examples
var x=5;
console.log("first", x);

var x=8;
console.log("second", x);    // Can redeclared "x" & Reassigned value "8"

let y=10;
y=16;
console.log("first", y);      // Can't redeclare, can reassign value 

const z=12;
console.log("z Value:", z);     //Can't redeclare & reassign value
let a=9;
let b="5";                        // "=" assigns value
console.log("first", a==b);     //"==" compares value not datatype
console.log("second", a===b);   //"===" compares both Value & Datatype
console.log("first", a!=b);
console.log("second", a!==b);
console.log("first", a<b);
console.log("first", a>b);
console.log("second", a>=b);
console.log("second", a<=b);        // ***Boolean datatype(true,false)***





