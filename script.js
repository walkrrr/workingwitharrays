//CREATING AND MODIFYING AN ARRAY

//Created an array with 6 hobbies as elements
var hobbies = [
  "napping",
  "coding",
  "driving",
  "reading",
  "shopping",
  "exercising"
];

//Logged  out only the length of the array
hobbies.push("travelling");
//console.log(hobbies.length);

// Logged out each hobby by using a for loop
for (var hobby of hobbies) {
  console.log(`I like ${hobby}.`);
}

//Logged out 3rd element
console.log(hobbies[2]);

//Removed the last element
hobbies.pop();
//console.log(hobbies);

// Added two elements after the array's third element
hobbies.splice(2, 0, "binge-watching TV", "meditation");
//console.log(hobbies);

//Removed the first element of the array
hobbies.shift();
//console.log(hobbies);

//CREATE A NEW ARRAY AND COMBINE IT

//Created second array and added three goals as elements
var goals = [
  "Get job as developer",
  "Pay off all student loans",
  "Lose pandemic weight"
];

// Created second variable to join the hobbies and goals arrays
var allTheThings = hobbies.concat(goals);
console.log(allTheThings);

//Chose an element in the middle of the allTheThings array and used indexOf() to log out its index
var all = allTheThings.indexOf("coding");
console.log(all);

//Removed the element using the index position. Logged out allTheThings to check my work.
allTheThings.splice(2, 1);
console.log(allTheThings);

//Created a function expression called deleteArrayItem to accept array and item as parameters.
var deleteArrayItem = function (array, item) {
  // Inside the body of the function, I wrote a variable called index. The value of index pointed to the index of item.
  var index = array.indexOf(item);
  if (index === -1) {
    return;
  }
  array.splice(index, 1);
  //Returned modified array
  return array;
};
deleteArrayItem(allTheThings, "shopping");
console.log(allTheThings);

//Used forEach() to Log Out Elements and Their Index
allTheThings.forEach(function (item, index) {
  console.log(`${index + 1}. ${item.toUpperCase()}!`);
});
