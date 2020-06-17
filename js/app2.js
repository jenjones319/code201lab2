'use strict';
console.log('This file is connected')

var userPoints = 0;

alert('Hello and welcome to the guessing game!');

var user = prompt('What is your name?');
var userName = user.toLowerCase();
console.log(userName);

// the user variable
// - string
// - null
// "" empty

//if the user is empty string or null, keep asking them for their name. 
// while(user ==='' || user === null) { do something. }
// shorter version
while (!user) {
    user = prompt('Please type your name before pressing enter.');
}
//control flow, in js

//if(condition){do this}
//if(condition){do this} else if { do this} else {do this thing}

//This is the not equals comparison operator.

if (user != 'craig') {
    console.log(user);
    alert('These aren\'t the droids you\'re looking for.');
}

alert('Hello ' + userName + ', and welcome to the guessing game!');

var answer = prompt('Is my dog named Hank?');
console.log(answer);

if (answer === 'yes' || answer === 'y') {
    alert('It\'s true, his full name is Hank Hill.');
    userPoints = userPoints + 1;
    userPoints += 1;
    console.log('This is the user point total', userPoints);

} else {
    alert(' Oh, sorry, no points for you. His name really is hank');
    console.log('this is the user point total', userPoints);
}

for(var i = 0; i < 100; i++){
    if(i===2){
        console.log('keep going past the number 2.');
        continue;
    }
if(i===4){
    console.log('this is now breaking the loop.');
    break;
}
    console.log('the variable i:');
}

var placesILike = ['new york', 'chicago', 'miami', 'minneapolis'];
console.log(placesILike);

for(var x = 0; x < placesILike.length; x++){
    console.log('for loop doing work', placesILike[x])
}
placesILike.push('rome');
console.log('array push', placesILike);

