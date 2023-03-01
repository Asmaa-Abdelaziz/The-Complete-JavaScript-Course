// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Video 07
/*
// Problem #1  function receive one array of tempretures
const temperatures1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const ignoreErr = [];

// Ignore the error value using for loop

for (let i = 0; i < temperatures1.length; i++) {
  if (temperatures1[i] != "error") {
    ignoreErr.push(temperatures1[i]);
  }
}


const calcTempAmplitude = function (temps) {
  let maxValue = temps[0];
  let minValue = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    // Ignore the error value using continue
    if (typeof currTemp !== "number") continue;

    if (currTemp > maxValue) maxValue = currTemp;
    if (currTemp < minValue) minValue = currTemp;
  }

  const amplitude = maxValue - minValue;
  return amplitude;
};

// console.log(ignoreErr);
console.log(calcTempAmplitude(temperatures1));

// Problem #2  function receive 2 arrays of tempretures
const temperatures2 = [4, 8, -9, 12, 20, 3, "error,", -4, -3, 15];
// Use concat method to merge two arrays
const temperatures3 = temperatures1.concat(temperatures2);
console.log(temperatures3);
console.log(calcTempAmplitude(temperatures3));

// But if you want the function to take the two arrays?
const calcTempAmplitudeNew = function (arr1, arr2) {
  const temps = arr1.concat(arr2);
  console.log(temps);
  let maxValue = temps[0];
  let minValue = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    // Ignore the error value using continue
    if (typeof currTemp !== "number") continue;

    if (currTemp > maxValue) maxValue = currTemp;
    if (currTemp < minValue) minValue = currTemp;
  }

  const amplitude = maxValue - minValue;
  return amplitude;
};

console.log(calcTempAmplitudeNew(temperatures1, temperatures2));

// Video 09
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius: ")),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
*/

// Coding challenge #1
/*
const printForecast = function (temps) {
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    console.log(`${temps[i]}℃ in ${i + 1} days.`);
  }
};
// DATA 1
//const temperatures = [17, 21, 23];
// DATA 2
const temperatures = [12, 5, -5, 0, 4];
printForecast(temperatures);
*/
