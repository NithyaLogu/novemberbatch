console.log("welcome")
var a = 2
var b=6
console.log(a+b)
var tree="friut"
console.log("tree")
var a=10
var b=7
console.log(a*b)
var a=9
var b=9
console.log(a/b)
var c=100
var b=100
console.log(c-b)
var a=8000
var b=9000
console.log(a%b)

/*function declaration*/
function abc()
{

    console.log("logesh")
    console.log("nithya")
}
abc()
function invitation(b)
{
    console.log(b,"family welcomes")


}
invitation("nithya")
invitation("logesh")
let age=17;
if(age>=18)
{
    console.log("u can drive");
}

/*operation*/
function operation(a,b,c)
{
    console.log(a);
    if(a=="add");
    console.log(b+c);
}
    operation("add",3,4)
      if(a=="sub")
    {
        console.log(b+c);    
    }
    operation ("sub",3,4)
    {

   if (a=="div")
    console.log(b/c);


    operation("div",3,4)
    }

 
/*array*/
let x = ["nithya","logesh","yukthi"]/*array squarebase*/
console.log(x);
/*index starts zero,ones
length starts with one,two*/


/*data types*/

let name=null
console.log(typeof(name));


/*variable*/

/* 1.var
2.let
3.cons

operator:

++ 1 increment
-- 1 decrement
&& (and operator)one time false (false)
// (or operator) one time true (true)
! not operator



/* object */
let person = {

    //key:value//
    name:"logu",
    age:1,
    no:9384618996,
    email:"nithyadeepak@gmail.com"} 


//add in obj//
person.pizza ="dont like";

//dot //
console.log(person);
// bracket/
 
console.log(abc[""]);


//array of object//
 let detail =[
    {      
    first: "priya",
    age:1,
    no:9384618996,
    email:"nithjkll.com"
    },

    {
    second : "swathi", 
    age:18,
    no:33702849,
    email:"niovnmk"
    },
    {
        thrid:"keerthi",
        age: 12,
        no: 3546890,
        email:["nithyy","defghjj"]  
    },

 ];
 console.log(detail["2"].email[1]);   //  array starts 0 zeros and put .(dot) to show seperate no,email,age etc// 

//string template// ( using before one 1 symbol ` and $ dollar symbol and {}curly bases)
 let number=57709790
 let address= "geetha street"
console.log(`my number is ${number} my address is ${address}`);


/* normal function:

function add(){
    console.log(2+6);
}*/

//arrow function:

//const add=() => {
  //  console.log(3+8);
//}
//add()

//expression:
let add =function(){
    console.log(6+4);
}
add()

 //loop:

 // for(initial expression;condition;step){
    // console.log("number is",something);
 
   /* for (let i=0;i<5;i++){
console.log("nithya"+i):
    }
        

 for (let x=1;x<10;x++){
    
    console.log("number is",x);
    
 }*/

//while loop :

let i=0;
while (i<5){
    console.log("number is:"+i);
   i++; 
}
//for in
 
let car={
    name:"bmw",year:2022
}
for (let a in car){
 console.log(car);
}

//for of

 let surname =["yukthika","yazhini"]
 for (let a of surname){
    console.log(a);
 }

// Array methods
// Map:
 /*let fruits =["apple","orange","mango"]
 fruits.map ( (e) => { 
    console.log(e);
 }
 );*/

 // for each:
  let fruits =["apple","orange","mango"]
 fruits.forEach( (e) => { 
    console.log(e);
 }
);


//let a=[3,5,8,7,9,4,34]
//let fin =a.find((ab) =>
//{
//return ab>10
//})
//console.log(fin);//

//refer code in skype for find, filter, sort, delete, etc






   











