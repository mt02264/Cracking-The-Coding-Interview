/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1List = version1.split('.');
    let v2List = version2.split('.');
    if (version2.length == 0) return 1;
    let isV1Bigger = v1List.length > v2List.length ? true : false;
    let lenDiff = v1List.length >= v2List.length ? v1List.length - v2List.length : v2List.length - v1List.length;    
    if (isV1Bigger){
        for (let i = 0; i < lenDiff; i++){
            v2List.push("0");
        }
    } else{
        for (let i = 0; i < lenDiff; i++){
            v1List.push("0");
        }
    }
    for (let i = 0; i < v1List.length; i++){
        if (Number(v1List[i]) > Number(v2List[i])){
            return 1;
        } else if (Number(v1List[i]) < Number(v2List[i])){
            return -1;
        } 
    }
    return 0;
};