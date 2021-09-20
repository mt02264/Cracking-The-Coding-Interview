/*

    URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string 
    has sufficient space at the end to hold the additional characters, and that you are given the "true" 
    length of the string. (Note: If implementing in Java, please use a character array so that you can 
    perform this operation in place.) 
    EXAMPLE 
    Input: "Mr John Smith "J 13 
    Output: "Mr%20J ohn%20Smith" 

    Runtime : O(n + aPartOfN) => O(n)
*/

function urlify(str, n){
    str = str.split('')
    let spaceCount = 0;
    for (let i = 0; i < n; i++){
        spaceCount += str[i] == " " ? 1 : 0;
    }
    let strLen = str.length - 1;
    n--;
    for (let i = strLen; i >= 0; i--){
        if (str[n] == " "){
            str[i] = "0";
            str[--i] = "2";
            str[--i] = "%"; 
        } else{
            str[i] = str[n];
        } 
        n--;
    }
    return str.join('');
}


console.log(urlify("Mr John Smith    ", 13)); // True
