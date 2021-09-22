/*    
    8.1 Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 
    steps at a time. Implement a method to count how many possible ways the child can run up the 
    stairs.
*/

/*
    n = 0:
        0 = 1 (you are right there)
    n = 1:
        1 = 1
    n = 2:
        1 + 1, 2 = 2
    n = 3:
        1 + 1 + 1, 1 + 2, 2 + 1, 3 = 4
    n = 4:
        1 + 1 + 1 + 1, 1 + 1 + 2, 1 + 2 + 1, 2 + 1 + 1, 2 + 2, 1 + 3, 3 + 1 = 7
*/

// recursive approach
// steps to reach n = (n-1) steps + (n-2) steps + (n-3) steps
function recTripleStep(n){
    if (n < 0) return 0;
    if (n == 0) return 1;
    if (n > 0){
        return recTripleStep(n-1) + recTripleStep(n-2) + recTripleStep(n-3);
    }
}
console.log("RECURSIVE APPROACH:")
console.log(recTripleStep(1))
console.log(recTripleStep(2))
console.log(recTripleStep(3))
console.log(recTripleStep(4))
console.log(recTripleStep(5))
console.log(recTripleStep(6))

// dynamic/iterative programmming appraoch
function iteTripleStep(n){
    if (n < 0) return 0;
    if (n == 0) return 1;
    if (n == 1) return 1;
    if (n == 2) return 2;
    let n1 = 1;
    let n2 = 1;
    let n3 = 2;
    for (let i = 3; i < n; i++){
        let n4 = n1 + n2 + n3;
        n1 = n2;
        n2 = n3;
        n3 = n4;
    }  
    return n1 + n2 + n3;
}
console.log("ITERATIVE APPROACH:")
console.log(iteTripleStep(1))
console.log(iteTripleStep(2))
console.log(iteTripleStep(3))
console.log(iteTripleStep(4))
console.log(iteTripleStep(5))
console.log(iteTripleStep(6))