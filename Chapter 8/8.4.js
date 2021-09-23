/*
    8.4 - Power Set: Write a method to return all subsets of a set. 
*/

/*
    [] = []
    [a] = [] [a]
    [ab] = [] [a] [b] [ab] 
    [abc] = [] [a] [b] [c] [ab] [ac] [bc] [abc] 
*/
let t = [];
function powerSet(set){
    if (set.length==0) return [];
    if (set.length==1) return [[],set]
    if (set.length==2) {
        return [[], [set[0]], [set[1]], set];
    }
    for (let i = 0; i < set.length; i++){
        let lastVal = set.splice(set.length-1,1);
        let tempSet = powerSet(set);
        let len = tempSet.length;
        for (let j = 0; j < len; j++){
            let temp = tempSet[j];
            temp.push(lastVal[0]);
            tempSet.push(temp);
        }
        return tempSet;
    }
};

console.log(powerSet([1,2,3]))
