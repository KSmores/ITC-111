// Flow Control - allows us to make changes based on decisions made by the user

// Loops - iterate/count through elements, allows for repitition of repetitive parts of code

// For Loop 

/*
var fruits = ['apples', 'oranges', 'grapes', 'lemons', 'bananas'];

for (var i = 0;i < fruits.length;i++) {
    console.log(i + " is the index of " + fruits[i] + ".")
}
*/

// Conditions

// If-Else Statements - set condition to do something if true or something else if not true

var number = 63;

function oddEven(num){
    if (num % 2 == 0) {
        console.log(num + " is even.");
    } else {
        console.log(num + " is odd.");
    }
}

oddEven(number);