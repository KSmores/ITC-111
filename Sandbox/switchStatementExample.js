// Switch Statement - gives multiple outcomes based on the value of a condition

/*
    Syntax
        switch(condition){
            case 'result1';
                code to run;
                break;
            case 'result2';
                code to run;
                break;
            case 'result3';
                code to run;
                break;
            default:
                default code to run;
                break;
        }
*/

var seasons = ['Spring','Summer','Fall','Winter'];
var zipCode = 12345;
var result = '';


switch(seasons){
    case 'Summer':
        result = 'It\'s Summer!';
        break;
    case 'Winter':
        result = 'It\'s Winter!';
        break;
    case 'Fall':
        result = 'It\'s Fall!';
        break;
    case 'Spring':
        result = 'It\'s Spring!';
        break;
    default:
        result = 'There are only 4 seasons!';
        break;
}

console.log(result);