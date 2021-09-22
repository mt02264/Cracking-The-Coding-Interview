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
