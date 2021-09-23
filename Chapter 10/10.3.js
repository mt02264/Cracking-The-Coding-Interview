/*
    10.3 Search in Rotated Array: Given a sorted array of n integers that has been rotated an unknown 
    number of times, write code to find an element in the array. You may assume that the array was 
    originally sorted in increasing order. 
    EXAMPLE 
    Input:findSin{15, 16, 19, 20, 25, 1, 3,4,5,7, 10, 14} 
    Output: 8 (the index of 5 in the array) 

    Runtime: O(n + logn) = O(n)
*/

function Sin(arr, num){
    let startOfArray = 0;
    let tempArr = [];
    for (let i = 0; i < arr.length - 2; i++){
        if (arr[i] > arr[i+1]){
            startOfArray = i+1;
        }
    }
    tempArr = arr.slice(startOfArray) + arr.slice(0, startOfArray);
    binarySearch(tempArr, n);
}
console.log(Sin([15, 16, 19, 20, 25, 1, 3,4,5,7, 10, 14]))