// Objects

// objects are variables that store multiple values

// var x = 5; // number variables

// var x2 = [5,6,14,56,234]; // number array variable

// Ex. 01
var x3 = {
    fName: 'tom',
    lName: 'thompson',
    age: 29,
    isMarried: true,

    displayFullName: function(){return this.fName + " " + this.lName; }
};

// Ex. 02
var car = {
    make: '',
    model: '',
    year: '',

    startEngine: function(){return 'engineStart';}
}

console.log(x3.displayFullName());