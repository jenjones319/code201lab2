'use strict';

var userPoints = 0
var userName

function getUserName() {
userName = prompt('What is your name?');
alert('Hello ' + userName);

var lowerCaseName = userName.toLowerCase();

if (lowerCaseName === 'jen') {
  alert('Welcome back, ' + userName + ' I missed you!');
} else {
  alert('Welcome, friend, to my page.');
}
}

getUserName();

function getEducation() {
var myEduc = prompt('Did I go to college in the United States? Yes or No.');

var upperCaseEduc = myEduc.toUpperCase();

if (upperCaseEduc === 'YES' || upperCaseEduc === 'Y') {
  alert('Correct!');
  userPoints = userPoints + 1;
  userPoints += 1;
} else {
  alert('Oh, snap! It\'s true. I went to USD in South Dakota.');
}
}

getEducation ();

function getTravel() {
var myTravel = prompt('Do I want to travel to China? Yes or No.');

var lowerCaseTravel = myTravel.toLowerCase();

if (lowerCaseTravel === 'no' || lowerCaseTravel === 'n') {
  alert('You are right. I don\'t want to go to China.');
  userPoints = userPoints + 1;
  userPoints += 1;
} else {
  alert('China is not on my bucket list.');
}
}

getTravel();

function getPets() {
var myPets = prompt('Do I have any pets? Y or N?');

var lowerCasePets = myPets.toLowerCase();

if (lowerCasePets === 'y' || lowerCasePets === 'yes') {
  alert('Yes, I do! I am a dog person. Correct!');
  userPoints = userPoints + 1;
  userPoints += 1;
} else {
  alert('Nope, the answer is yes. I love dogs.');
}
}

getPets();

function getKids() {

var myKids = prompt('Do I have any children? Yes or No?');

var upperCaseKids = myKids.toUpperCase();

if (upperCaseKids === 'YES' || upperCaseKids === 'Y') {
  alert('You\'re a good guesser!');
  userPoints = userPoints + 1;
  userPoints += 1;
} else {
  alert('Yeah, I do. I have a son.');
}
}

getKids();


function getHank() {
var answer = prompt('Is my dog named Hank?');

if (answer === 'yes' || answer === 'y') {
  alert('It\'s true, his full name is Hank Hill.');
  userPoints = userPoints + 1;
  userPoints += 1;
} else {
  alert(' Oh, sorry, no points for you. His name really is hank');

}
}

getHank();


function getNumberGuess() {
for (var i = 0; i < 4; i++) {
  var numberGuess = Number(prompt('Hey, guess a number between 1 and 10!'));
  if (numberGuess > 9) {
    alert('Guess again! Lower this time...');
  } else if (numberGuess < 9) {
    alert('Guess again! Higher this time...');
  } else if (numberGuess === 9) {
    alert('Awesome job! The correct answer is 9.');
    userPoints = userPoints + 1;
    userPoints += 1;
    break;
  } else {
    alert('Guess a number between 1 and 10!');
  }
}
}

getNumberGuess();

function getPlaces() {
var placesILike = ['new york', 'chicago', 'miami', 'minneapolis', 'mexico city', 'portland', 'boston', 'los angeles'];

var lastChance = 6;
while (lastChance > 0) {

  alert(userName + ' guess what city I have never visited...');
  var guess = prompt('Options are: New York, Chicago, Miami, Minneapolis, Mexico City, Portland, Boston, Los Angeles, Phoenix, Hong Kong, Beijing');
  var match = false;

  for (var i = 0; i < placesILike.length; i++) {
    if (guess === placesILike[i]) {
      alert('Nope, I\'ve been there before!');
      match = true;
      break;
    } else {
    }
  }
  if (match === false) {
    alert('Good job! I\'ve never been there before!');
    userPoints = userPoints + 1;
    userPoints += 1;
    break;
  } else {
    alert('Try again.');
  }
  lastChance--;
}
}

getPlaces();

alert('This is your guessing game point total: ' + userPoints);
