'use strict';
console.log('This file is connected.');

var userName = prompt('What is your name?');
// console.log(userName);
alert('Hello ' + userName);

var lowerCaseName = userName.toLowerCase();
/* console.log(lowerCaseName); */

if(lowerCaseName === 'jen' || lowerCaseName === 'hank') {
  alert('Welcome back, ' + userName + ' I missed you!');
} else {
  alert('Welcome, friend, to my page.');
}

var myEduc = prompt('Did I go to college in the United States? Yes or No.');
// console.log(myEduc);

var upperCaseEduc = myEduc.toUpperCase();
/* console.log(upperCaseEduc); */

if (myEduc === 'Yes') {
  alert ('Correct!');
} if (myEduc = 'no') {
  alert('Oh, snap! It\'s true. I went to USD in South Dakota.');
}

var myTravel = prompt('Do I want to travel to China? Yes or No.');
// console.log(myTravel);

var lowerCaseTravel = myTravel.toLowerCase();
/* console.log(lowerCaseTravel); */

if (myTravel = 'no') {
  alert ('You are right. I don\'t want to go to China.');
} if (myTravel = 'yes') {
  alert('China is not on my bucket list.');
}

var myPets = prompt('Do I have any pets? Y or N?');
// consolelog(myPets);

var lowerCasePets = myPets.toLowerCase();
/* console.log(lowerCasePets); */

if (myPets === 'Y') {
  alert('Yes, I do! Correct.');
} else {
  alert('Nope, the answer is Y. I love dogs.');
}

var myKids = prompt('Do I have any children? Yes or No?');
// console.log(myKids);

var upperCaseKids = myKids.toUpperCase();
/* console.log(upperCaseKids); */

if (myKids = 'yes') {
  alert('You\'re a good guesser!');
} if (myKids = 'no') {
  alert('Yeah, I do. I have a son.');
}