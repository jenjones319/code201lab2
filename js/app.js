'use strict';
console.log('This file is connected.');

var userName = prompt('What is your name?');
// console.log(userName);
alert('Hello ' + userName);

var lowerCaseName = userName.toLowerCase();
/* console.log(lowerCaseName); */

if (lowerCaseName === 'jen' || lowerCaseName === 'hank') {
  alert('Welcome back, ' + userName + ' I missed you!');
} else {
  alert('Welcome, friend, to my page.');
}

while (!user) {
  user = prompt('Please type your name before pressing enter.');
}

if (userName != 'jen') {
  console.log(userName);
  alert('These aren\'t the droids you\'re looking for.');
}

var myEduc = prompt('Did I go to college in the United States? Yes or No.');
// console.log(myEduc);

var upperCaseEduc = myEduc.toUpperCase();
/* console.log(upperCaseEduc); */

if (upperCaseEduc === 'YES' || upperCaseEduc === 'Y') {
  alert('Correct!');
} else {
  alert('Oh, snap! It\'s true. I went to USD in South Dakota.');
}

var myTravel = prompt('Do I want to travel to China? Yes or No.');
// console.log(myTravel);

var lowerCaseTravel = myTravel.toLowerCase();
/* console.log(lowerCaseTravel); */

if (lowerCaseTravel === 'no' || lowerCaseTravel === 'n') {
  alert('You are right. I don\'t want to go to China.');
} else {
  alert('China is not on my bucket list.');
}

var myPets = prompt('Do I have any pets? Y or N?');
// consolelog(myPets);

var lowerCasePets = myPets.toLowerCase();
// console.log(lowerCasePets);

if (lowerCasePets === 'y' || lowerCasePets === 'yes') {
  alert('Yes, I do! Correct.');
} else {
  alert('Nope, the answer is yes. I love dogs.');
}

var myKids = prompt('Do I have any children? Yes or No?');
// console.log(myKids);

var upperCaseKids = myKids.toUpperCase();
/* console.log(upperCaseKids); */

if (upperCaseKids === 'YES' || upperCaseKids === 'Y') {
  alert('You\'re a good guesser!');
} else {
  alert('Yeah, I do. I have a son.');
}

var userPoints = 0;

// the user variable
// - string
// - null
// "" empty

//if the user is empty string or null, keep asking them for their name. 
// while(user ==='' || user === null) { do something. }
// shorter version

//control flow, in js

//if(condition){do this}
//if(condition){do this} else if { do this} else {do this thing}

//This is the not equals comparison operator.

var answer = prompt('Is my dog named Hank?');
//console.log(answer);

if (answer === 'yes' || answer === 'y') {
  alert('It\'s true, his full name is Hank Hill.');
  userPoints = userPoints + 1;
  userPoints += 1;
  console.log('This is the user point total', userPoints);
} else {
  alert(' Oh, sorry, no points for you. His name really is hank');
  console.log('this is the user point total', userPoints);
}

for (var i = 0; i < 100; i++) {
  if (i === 2) {
    console.log('keep going past the number 2.');
    continue;
  }
  if (i === 4) {
    console.log('this is now breaking the loop.');
    break;
  }
  console.log('the variable i:');
}

var placesILike = ['new york', 'chicago', 'miami', 'minneapolis'];
console.log(placesILike);

for (var x = 0; x < placesILike.length; x++) {
  console.log('for loop doing work', placesILike[x])
}
placesILike.push('rome');
console.log('array push', placesILike);

