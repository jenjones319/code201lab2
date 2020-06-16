'use script'
console.log('This file is connected.')

var userName = prompt('What is your name?')
console.log(userName)

alert('Hello ' + userName)
var lowerCaseName = userName.toLowerCase()
console.log(lowerCaseName)

if (lowerCaseName === 'jen' || lowerCaseName === 'bob') {
  alert('Welcome back to my page ' + userName)
} else {
  alert('Welcome, friend, to my page.')
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