/*

    Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. 
    A palindrome is a word or phrase that is the same forwards and backwards. A permutation 
    is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 
    EXAMPLE 
    Input: Tact Coa 
    Output: True (permutations: "taco cat". "atco cta". etc.)

    Runtime : O(n)
*/

function isPermutationOfPalindrome(str){
    if (str.length == 1) return true;
    let strMap = new Map();
    for (let i of str){
        strMap.get(i) ? strMap.set(i, strMap.get(i)+1) : strMap.set(i, 1);
    }
    let isOddCharacters = 0;
    for (let i of strMap.keys()){
        isOddCharacters += strMap.get(i) % 2 == 0 ? 0 : 1;
    }
    return str.length % 2 == 0 ? (isOddCharacters == 0 ? true : false) : (isOddCharacters % 2 != 0 ? true : false) ;
}

console.log(isPermutationOfPalindrome('taatcoc')) // True
console.log(isPermutationOfPalindrome('taatcocsr')) // False