// 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
// Runtime : O(str1.length + str2.length + constant) => O(str1.length + str2.length)
//           O(n + m) where n = str1.length and m = str2.length
function isPermutation(str1, str2){
    if (str1.length != str2.length) return -1;
    let str1Map = new Map();
    let str2Map = new Map();
    for (let i of str1){
        str1Map.get(i) ? str1Map.set(i, str1Map.get(i) + 1) : str1Map.set(i, 1);
    }
    let isNotPermutation = 0;
    for (let i of str2){
        let str1MapValue = str1Map.get(i);
        if (str1MapValue >= 0){
            str1Map.set(i, str1MapValue - 1)
        } else {
            return -1;
        }
        if (str1Map.get(i) == 0){
            str1Map.delete(i);
        } 
    }
    console.log(str1Map)
    return str1Map.size == 0;
}

console.log(isPermutation('asd', 'dsa')); // True
console.log(isPermutation('asdqwe', 'dsawsd')); // False