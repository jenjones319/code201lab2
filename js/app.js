'use strict';
console.log('This file is connected.');

var userName = prompt('What is your name?');
// console.log(userName);
alert('Hello ' + userName);

var lowerCaseName = userName.toLowerCase();
/* console.log(lowerCaseName); */

if (lowerCaseName === 'jen') {
  alert('Welcome back, ' + userName + ' I missed you!');
} else {
  alert('Welcome, friend, to my page.');
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

//console.log(numberGuess);

for (var i = 0; i < 4; i++) {
  var numberGuess = Number(prompt('Hey, guess a number between 1 and 10!'));
  if (numberGuess > 9) {
    alert('Guess again! Lower this time...');
  } else if (numberGuess < 9) {
    alert('Guess again! Higher this time...');
  } else if (numberGuess === 9) {
    alert('Awesome job! The correct answer is 9.');
    break;
  } else {
    alert('Guess a number between 1 and 10!');
  }
}

var placesILike = ['new york', 'chicago', 'miami', 'minneapolis', 'mexico city', 'portland', 'boston', 'los angeles'];
// placesILike.push('rome');
// console.log(placesILike);

var lastChance = 6;
while (lastChance > 0) {

  console.log('Inside while loop');

  alert(userName + 'guess what city I have never visited...');
  var guess = prompt('Options are: New York, Chicago, Miami, Minneapolis, Mexico City, Portland, Boston, Los Angeles, Phoenix, Hong Kong, Beijing');
  var match = false;

  for (var i = 0; i < placesILike.length; i++) {
    if (guess === placesILike[i]) {
      alert('Nope, I\'ve been there before!');
      match = true;
      break;
    } else {
      console.log('incorrect answer', placesILike[i]);
    }
  }
  if (match === false) {
    alert('Good job! I\'ve never been there before!');
    break;
  } else {
    alert('Try again.');
  }

  console.log('array push', placesILike);
  lastChance--;
}