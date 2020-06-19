// Variable Methods

// String Methods

    var str = 'this is a string';

// Length Method - returns the size of a string

    var strLen = str.length

// indexOf Method - get the position of a character in a string

    var strIdx = str.indexOf('g');

// Slice Method - get a substring or specified portion of a string

    var strSlice = str.slice(5,7);

// toUpperCase & toLowerCase Methods - change the case of a character in a string

    var strUpper = str.toUpperCase();
    var strLower = str.toLowerCase();

// Replace Method - replace a specified character in a string

    var strRpl = str.replace('a', 'our');

    // console.log(strRpl);

// Arrays - group of elements/objects stored under the same name

    var fruits = ['apples', 'oranges', 'grapes', 'lemons', 'bananas'];

// Array Methods

// Lenth Method - gets the number of elements in an array

    // console.log(fruits.length);

// Push() Method - adds new element to end of an array
    
    // console.log(fruits);    
    // fruits.push('cantelopes');
    // console.log(fruits);

// Pop() Method - removes the last element in an array

    // console.log(fruits);    
    // fruits.pop('cantelopes');
    // console.log(fruits);

// Sort() Method - sorts the elements in an array
    
    // console.log(fruits);
    // console.log(fruits.sort());
    
// toString() Method - convert an array to a string and return result

    console.log(fruits);
    console.log(fruits.toString());