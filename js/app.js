'use script'
console.log('This file is connected.')

var userName = prompt('What is your name?');
var lowerCaseName = userName.toLowerCase();
console.log(lowerCaseName);
alert('Hello ' + userName);


if (lowerCaseName === 'jen' || lowerCaseName === 'hank'); {
  alert('Welcome back to my page ' + userName);
} else {
  alert('Welcome, friend, to my page.');
}

var myEduc = ('Did I go to college in the United States?');
var upperCaseEduc = myEduc.toUpperCase();
console.log(upperCaseEduc);

if (myEduc = 'YES'); {
alert ('Correct!');
} else {
  alert ('Oh, snap! It\'s true. I went to USD in South Dakota.');
}

var myBooleanValueTrue = true
var anotherBooleanValueFalse = false
var thirdBooleanValueTrue = true

if (myBooleanValueTrue && thirdBooleanValueTrue) {
  alert('The && will run if both are true')
  console.log('both values were true')
} else if (myBooleanValueTrue || anotherBooleanValueFalse) {
  alert('both values are true so this will run')
  console.log('both values are true')
} else if (thirdBooleanValueTrue) {
  alert('the third value was true so this will run')
  console.log('thirdBooleanValueTrue was true')
} else {
  console.log('There were no true values')
}

var emptyArray = ();

var quizAnswer = ['b', 'c', 'd', 'a', 'c'];
var nestedArray = [['yes','y'], 