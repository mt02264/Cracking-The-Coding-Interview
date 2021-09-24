/*
    16.6 Smallest Difference: Given two arrays of integers, compute the pair of values (one value in each 
    array) with the smallest (non-negative) difference. Return the difference. 
    EXAMPLE 
    Input: {1, 3, 15, 11, 2}, {23, 127, 235, 19, 8} 
    Output: 3. That is, the pair (11 , 8). 


*/

function smallestDiff(a, b){
    let pa = 0;
    let pb = 0;
    a = a.sort((a,b) => a - b);
    b = b.sort((a,b) => a - b);
    let minDiff = Infinity;
    let minDiffPair = [];
    while (pa < a.length && pb < b.length){
        if (Math.abs(a[pa] - b[pb]) < minDiff){
            minDiff = Math.abs(a[pa] - b[pb]); 
            minDiffPair = [a[pa], b[pb]];
        }
        if (a[pa] > b[pb]){
            pb++;
        } else if (a[pa] < b[pb]){
            pa++;
        } else{
            return [a[pa], b[pb]];
        }
    }
    return `minimum Difference is ${minDiff} for the pair [${minDiffPair}]`;
}


let a = [1, 3, 15, 11, 2]
let b = [23, 127, 235, 19, 8];
console.log(smallestDiff(a,b))