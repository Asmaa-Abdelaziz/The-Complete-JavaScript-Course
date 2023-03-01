/*
js = "amazing";
let message = "JS is FUN!!!"
if (js==='amazing')
alert (message)
console.log(40+30-11);
let myFirstName = "Asmaa";
let myLastName = "abdelaziz";
let myJob = "student";

console.log (myFirstName);
console.log (myLastName);
alert(myJob);
*/

/******************************/

/*
//DATA TYPES

jsIsFun = true;   //declaring the variable

console.log (typeof jsIsFun);
console.log (typeof 23);
console.log (typeof 'Asmaa');

jsIsFun = "Yes";  //assign new value to the variable

console.log (jsIsFun);
console.log (typeof jsIsFun);

let year;
console.log (typeof year);

year = 1999;
console.log (typeof year);
*/

/***************let , const and var****************/

/*
 declaring variable with let >> the value of the variable can be changed later
 declaring variable with const >> the value of the variable can not be changed later
 declaring variable with var >> the value of the variable can be changed later (like let with differances)
*/
/*
const myName ="Asmaa Abdelaziz";
let age = 23;
age = 24;
var status = 'single';
status = 'married';
*/

/**************operators****************/
/*
// assignment opertator
const myFirstName = "Asmaa";
const myLastName = "Aziz";
console.log (myFirstName +' '+ myLastName)
let x = 15-10;
console.log (x);
x +=5;   //x = x + 5
console.log (x);
x -=5;   //x = x - 5
console.log (x);
x ++;   //x = x + 1
console.log (x);
x --;   //x = x - 1
console.log (x);

//comparison operator
let age1 = 20;
let age2 = 30;
console.log (age1 > age2); //>, <, <=, >= 
console.log (age2 >= age1);
console.log (age1 > 18);
console.log (age1 + 5 <= age2 +5);
*/


/************strings and template literals************/
/*
const myFirstName = 'Asmaa';
const myLastName = 'Aziz';
const dateOfBirth = '9/9/1999';
let age = 23;

const discription= "I'm " + myFirstName + ' ' + myLastName + ' a ' + age + " years old, "+ "my date of birth is " + dateOfBirth;
console.log (discription);

const newDiscrption = `I'm ${myFirstName} ${myLastName} a ${age} years old, my date of birth is ${dateOfBirth}`;
console.log(newDiscrption);

console.log('string with \n\
multiple \n\
lines ')

console.log(`string with 
multiple
lines`);
*/

/**************if_else statements***************/
/*
let age = 16;
if (age > 18){
    console.log('You can drive nooow!!!');
}else{
    const yearsLeft = 18 - age;
    console.log(`wait another ${yearsLeft} years`)
}
*/

/**********Type conversion and coercion**********/
/*
//conversion > convert from one type to another
//convert a string to a number
let birthYear = '1999';
console.log(birthYear, typeof(birthYear));
let birthYearNum = Number(birthYear);
console.log(birthYearNum, typeof(birthYearNum));
console.log(`My age is equal ${2022-birthYear}`);
//NaN > not a number > if you try to convert a string to a number but it isn't a number
console.log(Number('Asmaa'));
console.log(typeof(NaN));
//convert a number to a string 
let age = String(23);
console.log(age, typeof(age));
console.log(`I'm ${age} years old.`);

*/

//truthy and falsy values 
// 5 falsy values > 0, '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({}));  //truthy
const money = 0;
//let money;
if (money){
    console.log("Don't spend it all :)")
}else{
    console.log('You should get a job!')
}
*/

//Equality operators === vs ==
// === strict equality operator > return true when both side are exactly the same (does't type coercion) 
// == loose equality operator > does type coercion (for clean code avoid loose equality)
/*
const age = '23';

if (age === 23){
    console.log(`your age is ${age}`) 
} else if (Number(age) === 23){
    console.log(`your age is ${Number(age)},strict equality doesn't type coercion.`);
} else{
    console.log('not allowed for you :)');
}

if (age == 23){
    console.log(`your age is ${age}, loose equality does type coercion.`);
}
*/

//boolean logic AND, OR & NOT 
//logical operator 
/*
const myname = prompt("what's your name");
const password = prompt ("Enter your password :");

if (myname === 'asmaa' && Number(password) == 99){
    console.log('hello :)');
}else{
    console.log('Not allowed to enter')
}
*/

//switch statement 
/*
const day = prompt('What is today?');
switch(day){
    case 'monday':
        console.log('plan course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log('perpare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code exambles');
        break;
    case 'friday':
    case 'saturday':
        console.log('enjoy :) :)');
        break;
    case 'sunday':
        console.log('go to gym');
        break;
    default:
        console.log('error!!!')
}
*/

/******************assignments******************/
/*
// values and variables
let country = 'Egypt';
let continent = 'Africa';
let population = 90;
console.log (country);
console.log (continent);
console.log (population);


//Data Types
let isIsland = false;
//let language;
console.log (typeof isIsland);
console.log (typeof population);
console.log (typeof country);
//console.log (typeof language);


// let, const and var   
const language = 'Arabic';

//basic operators
console.log ( population / 2);
population ++;
console.log (population);
let finlandPopulation = 6;
console.log (population > finlandPopulation);
let avgPopulation = 33;
console.log (population < avgPopulation);

let description = country +' is in ' + continent +' , and its ' + population + ' million people speak ' + language;
console.log (description);

//strings and template literals
description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

//If_else statements
if (population > 33){
    console.log(`${country}'s population is above average`);
}else{
    console.log(`${country}'s population is ${33 - population} below average`);
*/

//coercion > JS convert one value to another behind the scene to match the other value
/*
console.log("i'm " + 23+ " years old.");
console.log('23' - '10' - 3);
console.log('80' / '2');
let n = '1'+ 1; // 11 > string
console.log(n, typeof(n));
n = n - 1 // - operator convert the string to number automaticly = 10 > number
console.log(n, typeof(n));
console.log('9' - '5');  //4
console.log('19' - '13' + '17'); //617
console.log('123' < 57);  //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143
*/

//Equality operator == vs === 
/*
let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours === 1){
    console.log('Only one border');
} else if (numNeighbours > 1) {
    console.log('More than one border');
}else{
    console.log('No borders');
}
*/

//logical operator
/*
const language = 'English';
const numPeople = 20;
const isIsland = false;

if (language == 'English' && numPeople < 50 && !isIsland){
    console.log('You should live in portugal :)');
}else{
    console.log('portugal does not meet all the criteria');
}
*/

//the switch statement 
/*
const language = prompt ('Enter the language :');
switch (language){
    case 'chinese':
    case 'mandarin':
        console.log('most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place in number of native speakers');
        break;
    case 'hindi':
        console.log('4th place in number of native speakers');
        break;
    case 'arabic':
        console.log('5th place in number of native speakers');
        break;
    default:
        console.log("doesn't mentioned")
}
*/

//conditional (ternary) operator 

const population = 13; 
const printedMessage = population > 33? "portugal's population is above average": "portugal's population is below average";
console.log(printedMessage)


/*****************coding challenge********************/
// coding challenge #1
/*
let markMass;
let markHeight;
let johnMass;
let johnHeight;


//TEST DATA 1
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight =1.95;



//TEST DATA 2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight =1.76;


let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
console.log (markBMI);
console.log (johnBMI);
let markHigherBMI = (markBMI > johnBMI);
console.log (markHigherBMI);

// coding challenge #2
if (markBMI > johnBMI){
    console.log(`mark's BMI is higher than john's`);
    console.log(`mark's BMI (${markBMI}) is higher than john's (${johnBMI})`);
}else{
    console.log(`john's BMI is higher than mark's`);
    console.log(`john's BMI (${johnBMI}) is higher than mark's (${markBMI})`);
}
*/

//  coding challenge #3
/*
let dolphinsAvg = ( 96 + 108 + 89 ) / 3;
let koalassAvg = ( 88 + 91 + 110 ) / 3;

if (dolphinsAvg > koalassAvg ){
    console.log("Dolphins team win :)")
} else if (dolphinsAvg < koalassAvg ){
    console.log("Koalas team win :)");
} else {
    console.log("game end with draw");
}
*/

// BONUS 1
/*
let dolphinsAvg = ( 97 + 112 + 101 ) / 3;
let koalassAvg = ( 109 + 95 + 106 ) / 3;

if (dolphinsAvg > koalassAvg && dolphinsAvg >= 100){
    console.log("Dolphins team wins :)");
} else if (dolphinsAvg < koalassAvg && koalassAvg >= 100 ){
    console.log("Koalas team wins :)");
} else {
    console.log("game end with draw");
}
*/

//BOUNS 2
/*
let dolphinsAvg = ( 97 + 112 + 101 ) / 3;
let koalassAvg = ( 109 + 95 + 106 ) / 3;

if (dolphinsAvg > koalassAvg && dolphinsAvg >= 100){
    console.log("Dolphins team wins :)");
} else if (dolphinsAvg < koalassAvg && koalassAvg >= 100 ){
    console.log("Koalas team wins :)");
} else if (dolphinsAvg === koalassAvg && dolphinsAvg >= 100 && koalassAvg >= 100 ) {
    console.log("game end with draw");
}else {
    console.log('No team wins the trophy')
}
*/

// coding challenge #4 
/*
const billValue = 430 ;
const tip = (billValue >= 50 && billValue <=300)? (15 / 100) * billValue: (20 / 100) * billValue;
console.log (`The bill was ${billValue}, the tip was ${tip} and the total value ${billValue+tip}`);
*/