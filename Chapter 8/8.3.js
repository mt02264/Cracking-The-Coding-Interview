/* 
    Magic Index: A magic index in an array A [e ... n -1] is defined to be an index such that A[ i] = 
    i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in 
    array A. 
*/

// brute force
function bfMagicIndex(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == i){
            return [i, arr[i]];
        } else if (arr[i] > i){
            return false;
        }
    }
    return false;
}
console.log("O(n) solution");
console.log(bfMagicIndex([-40,-20,-1,1,2,3,5,7,9,12,13]));

// optimized
// kind of like binary search
function bsMagicIndex(arr, start=0, end=arr.length-1){
    let mid = Math.floor((end + start) / 2);
    if (arr[mid] == mid){
        return [arr[mid], mid];
    } else if (arr[mid] < mid){
        return bsMagicIndex(arr, mid+1, end);
    } else if (arr[mid] > mid) {
        return bsMagicIndex(arr, start, mid);
    }
    return false;
}

console.log("O(logn) solution");
console.log(bsMagicIndex([-40,-20,-1,1,2,3,5,7,9,12,13]));