/*
    10.5 Sparse Search: Given a sorted array of strings that is interspersed with empty strings, write a 
    method to find the location of a given string. 
    EXAMPLE 
    Input: ball, ["at", "", "", "", "ball","", "", "car","", "", "dad","", ""] 
    Output: 4 

    Runtime : O(logn)
*/

function sparseSearch(arr, str, low = 0, high = arr.length-1){
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == str){
        return mid;
    } else if (arr[mid] == ""){
        let curr = mid;
        while (arr[curr] == "" && curr < arr.length){
            curr++;
        }
        if (curr < arr.length){
            if (arr[curr] < str){
                return sparseSearch(arr, str, curr, high);
            } else if (arr[curr] > str){
                return sparseSearch(arr, str, low, mid-1);
            } else if (arr[curr] == str){
                return curr;
            } 
        } else {
            return sparseSearch(arr, str, low, mid-1);
        }
    }
}
let arr =  ["at", "", "", "", "ball","", "", "car","", "", "dad","", ""] ;
console.log(sparseSearch(arr, "at")) // 0
console.log(sparseSearch(arr, "dad")) // 10
console.log(sparseSearch(arr, "car")) // 7
