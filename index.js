/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 19;
if (votingAge > 18) {
  console.log(true);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required).
userName.name = 'samantha.dutcher';
console.log(userName);
userName.newName = 'avianna.jones';
console.log(userName);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let numString = "1999";
console.log(Number(numString));

//Task d: Write a function to multiply a*b
let a = 5;
let b = 10;
function multiply(a, b) {
  return 5 * 10;
}
console.log(multiply(a, b));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years
let myAge = 33;
console.log(myAge);
let dogYears = 7;
console.log(dogYears);
function myAgeInDogYears(myAge, dogYears) {
  return myAge * dogYears;
}
console.log(myAgeInDogYears(myAge, dogYears));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// function results(final){
//   console.log("Adult Dog Needs", final, "lbs of food");
// }
// let lbs = 1;
function adultDog(lbs) {
    if (lbs <= 5){
      return(lbs * .05);
  }
  else if (lbs <= 10) {
      return(lbs * .04);
  }
  else if (lbs <= 15){
      return(lbs * .03);
  }
  else{
      return (lbs * .02);
  }
}
// console.log(adultDog(lbs));


// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// let age = 0.25;
function puppies(age,lbs){
  if (age >= .167 && age <= .33){
      return(lbs * .1);
  }
  else if(age > .33 && age <=.58){
      return(lbs *.05);
  }
  else {
      return(lbs * .04);
  }
// }console.log(puppies(age,lbs));

function foodcalculator(age, lbs){
  if(age < 1){
    return (puppies(age, lbs));
  }
  else{
    return(adult(lbs));
  }
  // console.log(foodcalculator(age,lbs));
}

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

foodcalculator(1,15); //Don't know why this is grayed out. There's no syntax errors in the code above.

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

function RPS(){ //Not sure why RPS is grayed out
  let random = Math.random()
  if (random < .3) {
    console.log("Rock") 
  }
  if (random > .3 && random < .6) {
    console.log("Paper")
  }
  if (random > .6) {
    console.log("Scissors")
  }
console.log(RPS);
}
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

let km = 1;
function convert(km){
  return km / 1.609; 
} console.log(convert(km)); //Why is this unreachable?

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
let feet = 1;
function convertFT(feet){
  return feet * 30.48;
}console.log(convertFT(feet)); 

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

let bottles;
function annoyingSong(number){
for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of beer on the wall.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+bottles+" of beer on the wall.");
    }
    console.log(counter+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter == 1) {
        console.log("No bottles of beer on the wall.");
    }
  }
}
/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function assignGrade(score) {
  for (let score = 80; score <= 100; score++)
  if (score > 90) {
      return 'A';
  } else if (score > 80) {
      return 'B';
  } else if (score > 70) {
      return 'C';
  } else if (score > 65) {
      return 'D';
  } else {
      return 'F';
  }
  console.log('For ' + i + ', you got a ' + assignGrade(i))
}

// for (let score = 80; score <= 100; score++) {
// console.log('For ' + i + ', you got a ' + assignGrade(i));
// }
/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

// let str = ["To be or not to be, that is the question"]

function vowelCount(str){
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let str = ["To be or not to be, that is the question"]
  let counter = 0;
  for (let letter of str.toLowerCase()){
    if (vowels.includes(letter)){
      counter++
      return counter;
    }
}
console.log(`This string contains ${counter} vowel(s)`)




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
// update your rock papers sissors code below to take a prompt from a user using the window object
