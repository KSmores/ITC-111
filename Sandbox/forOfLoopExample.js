// forOf Loops - use to iterate through arrays, strings, or objects

/*
    Syntax:
            for(element of array){
                code to run;
            }
*/

var fruits = ['Apples','Oranges','Pears','Bananas'];
var fruit = '';

for(e of fruits){
    fruit += e + ", ";
    
}
console.log(fruit);