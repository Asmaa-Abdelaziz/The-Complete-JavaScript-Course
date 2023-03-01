// use strict mode to write more secure code > avoid accidental errors
'use strict';

//functions
/*
function logger (){
    //function body
    console.log('Hello, my name is Asmaa');
}
//calling || runing || invoking function 
logger();

function fruitProcessor (apples, oranges){
    const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
    return juice;
}
fruitProcessor (0, 1);
// to use the return value of the function > store it in a variable || log directly to the console
const juiceContent = fruitProcessor (5, 4);
console.log (juiceContent);
console.log(fruitProcessor(3, 3));

// function declaration vs expression
//function declaration 
function calcAge1(currentYear, birthYear){
    return 2022 - birthYear;
}
const age1 = calcAge1(2022, 1999); // can be defined before the function declaration, but prefere not to do that, do if it necessary only.

//function expression
const calcAge2 = function (currentYear, birthYear){
    return 2022 - birthYear;
}
const age2 = calcAge2 (2022, 1999); // can't be defined before the function expression because of a process called hoisting.
console.log(age1, age2);
*/

//Arrow functions
/*
const calcAge3 = birthYear => 2022 -birthYear;
const age3 = calcAge3(1999);
console.log(age3);
const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2022 - birthYear;
    const retirement = 60 - age;
    return `${firstName} retires in ${retirement}`;
}
console.log(yearsUntilRetirement(1999, 'Asmaa'));
*/
//function calling other functions
/*
function cutPieces (fruit){
    return fruit * 4;
}
function fruitProcessor (apples, oranges){
    const applePieces = cutPieces(apples);
    const orangePices = cutPieces(oranges);
    const juice = `juice with ${applePieces} pieces of apples ,and ${orangePices} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor (2, 3));
*/

//introduction to arrays 
// part 2 > video 09

//Basic array operations (Methods)
/*
const names = ['Asmaa', 'Amany', 'Amal', 'Aya'];
// add elements at the end of array using push function
names.push('Alaa');
console.log(names);
//push function returns the Length of the array
const newLength = names.push('Ayat');
console.log(names);
console.log(newLength);
// add elements at the begining of array using unshift function
const newL = names.unshift('Amal'); //unshift function return the length
console.log(names);
console.log(newL); 
// remove elements
names.pop(); // remove from the end
console.log(names);
const poped = names.pop(); // return the poped element
console.log(poped);
console.log(names);
names.shift(); //remove from begining
console.log(names);
// return the index at which this elements
console.log(names.indexOf('Asmaa'));
// includes return true if the array includes this element, false if the array doesn't include this element
console.log(names.includes('Asmaa'));
console.log(names.includes('Alaa'));
*/

//introduction to objects && Dot vs.bracket notation && object methods 
/*
const Asmaa = {
    //property|key: value
    firstName: 'Asmaa',
    lastName: 'Abdelaziz',
    birthYear: 1999,
    job: 'student',
    status: 'single',
    friends: ['Alaa', 'Amal', 'Aya'],
    hasDriversLicence: false,
    // we can add function to object using function expression
    // calcAge: function(birthYear) {
    //     return 2022 - birthYear;
    // }
    // we define birthYear before so we shouldn't pass it to the function again and use it directly (don't repeat youeself)
    // calcAge: function(){
    //     //console.log(this); //this point to the (Asmaa) object now 
    //     return 2022 - this.birthYear; // we don't write Asmaa.birthYear as don't repeat yourself 
    // }

    // using Dot notation to create new property
    calcAge: function(){
        this.age = 2022 - this.birthYear; //here you make a new property to the Asmaa object called age
        //console.log(this);
        return this.age;
    },

    challenge: function(){
        return `${this.firstName} has ${this.friends.length} friends, and here best friend is called ${this.friends[1]}.`
    },

    getSummary: function(){
        // we use this.age because it was calculated before calling getSummary function > if not be called before > should use this.calcAge
        return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job}, and she has ${this.hasDriversLicence ? 'a': 'no'} driver's license.`
    }
};
//You can access the property using the dot notation or bracket notation
//#1
console.log(Asmaa.firstName);
//#2 
console.log(Asmaa['lastName']);

//use bracket notation to write any expression in
const nameKey ='Name';
console.log(Asmaa['first' + nameKey]);
console.log(Asmaa['last' + nameKey]);

const interstedIn = prompt(`what do you want to Know about Asmaa?
choose fristName, lastName, birthYear, status, friends `);
console.log(Asmaa.interstedIn); // the object Asmaa doesn't have an intersted in prorerty so the result is undefined
console.log(Asmaa[interstedIn]); // bracket notation replace the expression with the actual value
//use bracket notation as if condition 
if (Asmaa[interstedIn]){
    console.log(Asmaa[interstedIn]);
}else{
    console.log('wrong choice, try again!!!');
};
//use dot and bracket notation to add new property to an object
Asmaa.location = 'Egypt';
Asmaa['gmail'] = 'asmaa.elesha99@gmail.com';
console.log(Asmaa);
//challenge "Asmaa has 3 friends, and here best friend is called Amal"
console.log(Asmaa.challenge());

//function property
//console.log(Asmaa.calcAge(1999));
//console.log(Asmaa['calcAge'](1999));
console.log(Asmaa.calcAge());
// console.log(Asmaa['calcAge']())
// using dot notation make you calculate the age once and then retrieve the property that you had already calculated before without calculate it every time. (effective solution) 
console.log(Asmaa.age);

//challenge "Asmaa Abdelaziz is a 23 years old student, and she dosen't have a driver's license."
console.log(Asmaa.getSummary());
*/

//Iteration (The for loop)
/*
for (let rep = 1; rep<=10; rep++){
    console.log(`lifting weights repetition ${rep}`);
}
*/
//looping arrays, breaking and continuing
/*
//read element from array
const types = []; // declare an empty array to use it
const asmaaAray = ['Asmaa', 'Abdelaziz', 23, ['Alaa', 'Amal', 'Aya'], true];
for (let i = 0; i < asmaaAray.length ;i++){
    //reading from array
    console.log(asmaaAray[i], typeof asmaaAray[i]);
    //filling an array based on array
    //types [i] = typeof asmaaAray[i];
    types.push(typeof asmaaAray[i]);
};
console.log(types);
const years = [1991, 2000, 1965, 1999];
const ages = [];
for (let i = 0; i < years.length; i++){
    //ages[i] = 2022 - years[i];
    ages.push(2022 - years[i]);
}
console.log(ages);

//continue and break
const newTypes = ['Asmaa','Abdelaziz', true, 23, 'student', ['Alaa', 'Amal']];
console.log('---ONLY STRINGS---')
for (let i = 0; i < newTypes.length; i++ ){
    if (typeof newTypes[i] !== 'string') continue;
    console.log(newTypes[i], typeof newTypes[i]);
}
console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < newTypes.length; i++ ){
    if (typeof newTypes[i] === 'number') break;
    console.log(newTypes[i], typeof newTypes[i]);
}
*/

//looping backwards and looping in loop
/*
const years = [1991, 2000, 1965, 1999];
for (let i = years.length - 1; i >= 0 ; i--){
    console.log(years[i]);
}
for (let exercise = 1; exercise < 4; exercise++){
    console.log(`----starting exercise ${exercise}----`);
    for (let rep = 1; rep < 6; rep++){
        console.log(`exercice number ${exercise} repetition ${rep}`);
    }
}
*/

//the while loop 
// for (let rep = 1; rep<=10; rep++){
//     console.log(`lifting weights repetition ${rep}`);
// }
//doing the same thing using while loop 
//using counter variable
/*
let rep = 1;
while (rep <= 10){
    console.log(`lifting weights repetition ${rep}`);
    rep++;
}
//without using counter variable
let dice = Math.trunc(Math.random() * 6)+1;
// console.log(dice);
while (dice != 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6)+1;
    if (dice ===6) console.log('loop is about to end ...')
}
*/

/*************assighnments*************/
//function
/*
function describeCountry (country, population, capitalCity){
    const countryDescription =`${country} has ${population} million people, and its capital city is ${capitalCity}.`;
    return countryDescription;
}
const printedMessage = describeCountry('finland', 6, 'helsinki');
//const printedMessage = describeCountry('Egypt', 90, 'Cairo');
//const printedMessage = describeCountry('France', 70, 'Paris');
console.log(printedMessage);

//function declaration
function percentageOfWorled1 (country, population){
    const percentagePopulation = ( population / 7900 ) * 100;
    const populationDescription = `${country} has ${population} million people, so it's about ${percentagePopulation}% of the world population.`;
    return populationDescription;
}
const description1 = percentageOfWorled1 ('China', 1441);
//const description1 = percentageOfWorled1 ('Egypt', 90);
//const description1 = percentageOfWorled1 ('France', 70);
console.log(description1);

//funtion expression 
const percentageOfWorled2 = function (country, population){
    const percentagePopulation = ( population / 7900 ) * 100;
    const populationDescription = `${country} has ${population} million people, so it's about ${percentagePopulation}% of the world population.`;
    return populationDescription;
}
const description2 = percentageOfWorled2 ('China', 1441);
console.log(description2);
*/
//Arrow function 
/*
const percentageOfWorled3 = (country, population) =>{
    const percentagePopulation = (population / 7900) * 100;
    return `${country} has ${population} millon people, so it's about ${percentagePopulation}% of the world population.`;
}
console.log(percentageOfWorled3('China', 1441));
*/
//function calling other functions
/*
function percentageOfWorled1 (country, population){
    const percentagePopulation = ( population / 7900 ) * 100;
    const populationDescription = `${country} has ${population} million people, so it's about ${percentagePopulation}% of the world population.`;
    //return populationDescription;
    return percentagePopulation;
}
const describePopulation = (country, population) => {
    const percentagePopulation = percentageOfWorled1(country, population);
    return `${country} has ${population} million people, which is about ${percentagePopulation}% of the world.`;
}
console.log(describePopulation('China', 1441));
*/

//introduction to arrays
/*
const populations = [90, 60, 1441, 13];
if(populations.length === 4){
    console.log(true);
}else{
    console.log(false);
}
function percentageOfWorled1 (population){
    const percentagePopulation = ( population / 7900 ) * 100;
    return percentagePopulation;
}
const percentages = [percentageOfWorled1(populations[0]), percentageOfWorled1(populations[1]), percentageOfWorled1(populations[2]), percentageOfWorled1(populations[3])];
console.log(populations, percentages)
*/

//Basic array operations (Methods)
/*
const neighbours = ['Sudan','libya','Oman'];
neighbours.push('Utopia');
neighbours.pop();
console.log(neighbours);
if (neighbours.includes() != 'Germany'){
    console.log('Probably not a central European country :D')
};
neighbours[neighbours.indexOf('Oman')] = 'The Red sea';
console.log(neighbours);
*/

//introduction to object && dot vs.bracket notation && object methods
/*
const myCountry = {
    country: 'Egypt',
    capital: 'Cairo',
    language: 'Arabic',
    population: 90,
    neighbours: ['Sudan', 'Libya'],
    describe: function(){
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighboring countries and a capital called ${this.capital}.`
    }, 
    checkIsland: function (){
        //this.isIsland = this.neighbours.length === 0 ? true: false;
        this.isIland = !Boolean(this.neighbours.length);
    },
};
console.log(myCountry);

//Dot vs. bracket notation 
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighboring countries and a capital called ${myCountry.capital}.`);
myCountry.population +=2;
console.log(`Increasing population by two million = ${myCountry.population}`)
myCountry.population -=2;
console.log(`Decreasing population by two million = ${myCountry['population']}`)
console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.checkIsland());
*/

//Iteration (The for loop)
/*
for (let rep = 1; rep <= 50; rep++){
    console.log(`Voter number ${rep} is currently voting.`)
}
*/

//looping arrays, breaking and continuing
/*
const populations = [90, 60, 1441, 13];
const percentages2 = [];
function percentageOfWorled1 (population){
    const percentagePopulation = ( population / 7900 ) * 100;
    return percentagePopulation;
}
for (let i = 0; i < populations.length; i++){
    percentages2[i] = percentageOfWorled1 (populations[i]);
};
console.log(populations, percentages2);
*/

//looping backwards and loops in loop
/*
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden','Russia']];
console.log(listOfNeighbours);
for (let outer = 0; outer < listOfNeighbours.length; outer++){
    //console.log(listOfNeighbours[outer]);
    for (let inner = 0; inner < listOfNeighbours[outer].length; inner++){
        console.log(`Neighbour: ${listOfNeighbours[outer][inner]}`);
    }
}
*/

//the while loop 
/*
const populations = [90, 60, 1441, 13];
const percentages3 = [];
function percentageOfWorled1 (population){
    const percentagePopulation = ( population / 7900 ) * 100;
    return percentagePopulation;
}
let i = 0;
while (i < populations.length){
    percentages3.push(percentageOfWorled1 (populations[i]));
    i++;
};
console.log(populations, percentages3);
*/

/************code challenges*************/
// code challenge #1
/*
const calcAverage = (score1, score2, score3) => {
    const avgScore = (score1 + score2 + score3) / 3;
    return avgScore;
}

const dolphinsScore = calcAverage (85, 54, 41);
const koalasScore = calcAverage (23, 34, 27);
console.log(`Dolphin average = ${dolphinsScore}, and Koalas average = ${koalasScore}.`);

const checkWinners = function (avgDolphins, avgKoalas){
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`);
    } else if (avgDolphins == avgKoalas){
        console.log(`Game ended with draw.`);
    }else {
        console.log(`No team wins`);
    }
}
checkWinners (dolphinsScore, koalasScore);
*/

//code challenge #2
/*
const calcTip = function (billValue){
    if (billValue >= 50 && billValue <= 300){
        const tip = 0.15 * billValue;
        return tip;
    }else{
        const tip = 0.20 * billValue;
        return tip;
    }   
};
console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(125), calcTip(555), calcTip(44)];
console.log(bills);
console.log(tips);
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]
console.log(total);
*/

//code challenge #3
/*
const mark = {
    fullName: 'Mark Miller',
    markMass: 78,
    markHeight: 1.69,
    calcBMI: function(){
        this.markBMI = this.markMass / (this.markHeight * this.markHeight) ;
        //console.log(this.markBMI)
        return this.markBMI;
    },
};

const john = {
    fullName: 'John Smith',
    johnMass: 92,
    johnHeight: 1.95,
    calcBMI: function(){
        this.johnBMI = this.johnMass / (this.johnHeight * this.johnHeight) ;
        return this.johnBMI;
    },
};
console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.calcBMI() > john.calcBMI()){
    console.log(`Mark's BMI (${mark.calcBMI()}) is higher than John's BMI (${john.calcBMI()})!`);
}else if (john.calcBMI() > mark.calcBMI()) {
    console.log(`john's BMI (${john.calcBMI()}) is higher than Mark's BMI (${mark.calcBMI()})!`);
}else if (mark.calcBMI() == john.calcBMI()) {
    console.log(`John has similar BMI like Mark.`);
};
*/

//code challenge #4
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
const calcTip = function (billValue){
    if (billValue >= 50 && billValue <= 300){
        const tip = 0.15 * billValue;
        return tip;
    }else{
        const tip = 0.20 * billValue;
        return tip;
    }   
};
for (let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(bills[i] + tip);
};
console.log(bills, tips, total);

//Bouns
const calcAverage = function (arr) {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr [i];
        avg = sum / arr.length;
    }
    //console.log(sum);
    console.log(avg);
}

calcAverage([1, 2, 3]);
calcAverage(total);
*/