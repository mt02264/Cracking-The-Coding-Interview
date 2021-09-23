/*
    16.1 Number Swapper: Write a function to swap a number in place (that is, without temporary variables). 
*/

function swapNumber(a,b){
    a = a - b;
    b = b + a;
    a = b - a;
    return [a,b];
}

console.log(swapNumber(2,3))