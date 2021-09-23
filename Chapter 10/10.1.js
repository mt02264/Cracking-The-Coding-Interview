/*
    10.1 Sorted Merge: You are given two sorted arrays, A and B, where A has a large enough buffer at the 
    end to hold B. Write a method to merge B into A in sorted order. 
*/

/*
    A = [1,4,6, , , , ]
    B = [3,5,7,9]
    totalNumber is A = A.length - B.length - 1;
    B[end] > A[end] = A[A.length-1] = B[end] : A[end]
*/

function sortedMerge(a,b){
    let bLen = b.length;
    let totalSpaceinA = a.length;
    let aLen = totalSpaceinA - bLen;
    while (bLen > 0 && aLen > 0){
        if (a[aLen - 1] > b[bLen - 1]){
            a[totalSpaceinA - 1] = a[aLen - 1];
            aLen--;
        } else{
            a[totalSpaceinA - 1] = b[bLen - 1];
            bLen--;
        }
        totalSpaceinA--;
    }
    while (bLen > 0){
        a[totalSpaceinA - 1] = b[bLen];
        bLen--;
        totalSpaceinA--;
    }
    while (aLen > 0){
        a[totalSpaceinA - 1] = a[bLen];
        aLen--;
        totalSpaceinA--;
    }
    return a;
}

let a = [1,4,6, , , , , ]
let b = [3,5,7,9]
console.log(sortedMerge(a,b));
