// 1.1 s Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? 

function allUniqueChar(str){
    let strMap = new Map();
    let isNotUnique = 0;
    for (let i of str){
        strMap.get(i) ? isNotUnique++ : strMap.set(i, 1);
        if (isNotUnique){
            return -1;
        }
    }
    return true;
}

console.log(allUniqueChar('asdasd')); // False
console.log(allUniqueChar('asdghj')); // True
console.log(allUniqueChar('qwertyuiopasdfghjklzxcvbn')); // True
console.log(allUniqueChar('qwertyuiopasdfghjklzxcvbsn')); // False