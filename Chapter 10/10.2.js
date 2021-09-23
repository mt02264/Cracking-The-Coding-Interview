/*
    10.2 - Group Anagrams: Write a method to sort an array of strings so that all the anagrams are next to 
    each other. 

    Runtime : O(arr.length + arr[0].length) => O(n + m) where n is teh number of strings, m is the length of strings
*/

/*
    1. find anagrams 
        a map for each string in the array
        compare the map keys and frequencies to group them together
        return the final array of strings based on map
*/

function isAnagram(map1, map2){
    let anagram = true;
    let count=0;
    for (let i of map1.keys()){
        map2.get(i) ? (map1.get(i) == map2.get(i) ? count++ : anagram = false) : anagram = false;
    }
    return anagram;
}



function groupAnagrams(arr){
    let mapList = []
    for (let i = 0; i < arr.length; i++){
        let tempMap = new Map();
        for (let j of arr[i]){
            tempMap.get(j) ? tempMap.set(j, tempMap.get(j) + 1) : tempMap.set(j, 1);
        }
        mapList.push(tempMap);
    }
    let isVisited = new Array(arr.length);
    let tempArray = [];
    for (let i in mapList){
        i = Number(i)
        if (!isVisited[i]){
            isVisited[i] = true;
            tempArray.push(arr[i]);
            for (let j = i+1; j < arr.length; j++){
                if (isAnagram(mapList[i], mapList[j])){
                    isVisited[j] = true;
                    tempArray.push(arr[j]);
                }
            }
        }
    }
    return tempArray;
}

console.log(groupAnagrams(["tahir", "huzaifa", "ali", "rihat", "lai"]));