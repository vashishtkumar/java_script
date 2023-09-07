let name="vashisht";
var name1="vashisht kumar"
const name3="vashist kumar";
//console.log(name,name1,name3);// vashisht vashisht kumar vashisht kumar
//console.table([name,name1,name3]);//in form of table starting with index 0;
name="vashisht changed the name";
name1="vashisht kumar changeed the name1";
//name3="vashisht kumar not able to change the name";//throw error as it is constant;
let phoneNum;
//console.log(phoneNum);//undefined


/*:::::::::::::::::::::::::::::::::::::::::JavaScript Identifiers:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
All JavaScript variables must be identified with unique names.
These unique names are called identifiers.
Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
The general rules for constructing names for variables (unique identifiers) are:
1 Names can contain letters, digits, underscores, and dollar signs.
2 Names must begin with a letter.
3 Names can also begin with $ and _ (but we will not use it in this tutorial).
4 Names are case sensitive (y and Y are different variables).
5 Reserved words (like JavaScript keywords) cannot be used as names.
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/


let person = "vashisht", carName = "scorpio", price = "16lakh";
//console.log(person,price,carName);// vashisht scorpio 16lakh
/*__________________________________________________________________________
you can redeclare var 
var name3;
but can't redeclare let and const
___________________________________________________________________________*/


/*::::::::::::::::::::string concatination:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let ap="vashisht"+" "+"learning"+"javascript";
console.log(ap);// vashisht leraning javascript
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/


/*:::::::::::::::::::Some examples of string concatination:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let a=6+9+"8";//158
let b="9"+8+8;//988
console.table([a,b]);
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/


/*::::::::::::::::::Points to remember for let:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
1 Variables defined with let cannot be Redeclared but i case of var you can
{let x = "vashisht";
let x = 0;} not possible throw error

{var x = "vashisht";
var x = 0;} it will not throw error x will updated with value 0;

2 Variables defined with let must be Declared before use
3 Variables defined with let have Block Scope
/////////////////////////////////////////////////
{
  let x = 2;
}
// x can NOT be used here
/////////////////////////////////////////////////////
-------------------------------------------------------
{
  var x = 2;
}
// x CAN be used here
-------------------------------------------------------------
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/


/*:::::::::::::::::::::::::::::::::::Hoisting:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
# Hoisting-only can be used for var not for const and let
examples
car="scorpio";
console.log(car)//scorpio
var car
//////////////////////
but in case of let it will throw reference error
car="scorpio"
console.log(car)
let car;
////////////////
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/


/*:::::::::::::::::::::::::::::::::CONST:::::::::::::::::::::::::::::::::::::::::::::
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
JavaScript const variables must be assigned a value when they are declared.

When to use JavaScript const?
Always declare a variable with const when you know that the value should not be changed.
Use const when you declare:

A new Array
A new Object
A new Function
A new RegExp

/////////////////////////////////////////////////////////////
Constant Objects and Arrays
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object
///////////////////////////////////////
examples
1.const mobile=["poco", "samsung", "nokia"];
  mobile.push("redmi");
  //console.log(mobile);// poco samsung nokia redmi
  mobile[0] = "apple";;
  console.log(mobile)// apple samsung nokia

2
  mobile=["infinix","nothing","hawai"];
  console.log(mobile);//it will throw error assigment to const variable

3// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";
// You can add a property:
car.owner = "vashisht";
console.log(car);
4
const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR // you cant change the whole object

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
