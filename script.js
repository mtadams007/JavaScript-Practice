alert("Welcome to NYCDA, This is your first Javascript!");
console.log("Welcome to NYCDA, This is your first Javascript!");
// 2. Variables and Math
//
// Let’s do some basic math and variable assignments.
// Create a variable called mathOne and give it a value of 20 , create another one called mathTwo and give it a value of 3.
// Create a new variable called mathSum that will be the sum of the first variables.
// Create another variabled called mathProduct and this will be the product of the first two variables.
// Print mathSum and mathProduct to your developer console.
//
let mathOne = 20;
let mathTwo = 3;
let mathSum = mathOne + mathTwo;
let mathProduct = mathOne * mathTwo;
console.log(mathSum);
console.log(mathProduct);
//
// 3. Mixing Data Types
//
// Now lets create a string variable called test and give it a value of your name.
// Create another variable called myAge and give it a value of your age.
// Add those two together and see what happens! Do you get a string or a number back? How about if we add a number and a boolean?
//
let test = "Michael";
let myAge = 29;
console.log(test + myAge);
console.log(myAge + true);
//
// 4. Arrays & Multidimensional Arrays
//
// Create an array with the name of 5 of your classmates (If you don’t remember than ask!).
// Access the classmate in the 4th position of your array.
// Add a new classmate into your array!
// The classmate in the 2nd position of your array has gone missing. Lets remove them from the array.
// Remove the last element of our array without specifying its index.
// Given the following multidimensional array:
// Access the array and return the element that contains ‘beans’
//
let array = ["Kay", "Josh", "Marishell", "Zee", "Ian"];
console.log(array[3]);
array.push("Andrew");
array.splice(1,1);
array.pop();
let newArray = [['David','Andrew'], ['Mike', 'Apple'], ['Beans' , 'Flour']];
console.log(newArray[2][0]);
//
// 5. Object Literals
//
// Create a object literal with your top 3 movies using the keys : topMovieOne , topMovieTwo , topMovieThree.
// Assign some movie values to your keys!
// Access your object literal and print out in the console the following string “ My favorite movies are {topMovieOne} and {topMovieTwo}, but I really enjoy {topMovieThree}”.
//
//
let movies ={
  topMovieOne : "The Empire Strikes Back",
  topMovieTwo : "Darjeeling Limited",
  topMovieThree : "Start the Revolution Without Me"
};
console.log("My favorite movies are " + movies.topMovieOne + " and " + movies.topMovieTwo + ", but I really enjoy " + movies.topMovieThree);
//
//
// 6. Object Literals & Changing Values
// Create an object with name and eyeColor properties. Change the eye color to 'brown'. Now add a hairColor property and change it to 'blonde'"
//
let brownEyedGirl ={
  name : 'Lola',
  eyeColor : 'brown',
  hairColor : 'blonde'
};
//
// 7. Logic
// Write a conditional that checks if a variable is less than 10. If it is, alert the user that their variable is less than 10. If it is not, let the user know what the variable was and that it was greater than 10.
// Write a program that evaluates two things:
// temperature and the status of an air conditioner (on or off).
// If the temperature is warmer than 80, and the air conditioner is off, log "turn the ac on!".
//  If the temperature is warmer than 80 and the ac is on, log "this thing is broken!".
// If the temperature is colder than 60 and the air conditioner is on, log "brrr, turn this thing off".
// If the temperature is cooler than 80, and the ac is off, log "not worth the electricity. leave it off."
//
let x = prompt('Enter a number por favor');
if (x < 10) {
  alert('Your variable is less than 10!');
}else{
  alert('Your variable was ' + x + ' which is greater than 10');
}

let temperature = prompt('What is the temperature?');
let airConditioner = prompt('Is the AC on or off?');

if (temperature > 80 && airConditioner === 'off'){
  console.log('turn the ac on!');
}else if (temperature > 80 && airConditioner ==='on'){
  console.log('this thing is broken!');
}else if (temperature < 60 && airConditioner === 'on') {
  console.log('brrr, turn this thing off');
}else if (temperature < 80 && airConditioner === 'off'){
  console.log("not worth the electricity. leave it off.")
}
//
// 8. Logic & Strict Testing
//  Write a conditional that checks if our variable is equal to the number 45.
//
//
let z = prompt("Please enter your favorite number");
if (z == 45) {
  alert('Hooray!');
}

//
// 9. Loops ( For )
// Create a for loop that will print out asterisks starting with 10 of them down to one.
// Example :
// ********** (10)
// *********(9)
// ********(8)

// let i = 1;
// while (i < 11) {
//   console.log(Array(i).join('*'));
//   i++;
// }

function asterisks() {
  let stars = "**********",
  i = 10;
  while (i > 0){
    stars = stars.slice(0,i);
    console.log(stars);
    i--;
  }
}
// asteriskForward();
// function asterisksF() {
//   let asteriskF = "*",
//   starsF = "";
//   for (let i = 1; i <= 10; i++){
//     stars += asteriskF;
//     console.log(starsF);
//   }
// }
// function asterisks2() {
//   let asterisk2 = "*",
//   stars2 = "",
//   i = 1;
//   while (i <= 10){
//     stars2 += asterisk2;
//     console.log(stars2);
//     i++;
//   }
// }
