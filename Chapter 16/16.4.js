/*
    16.4 Tic Tac Win: Design an algorithm to figure out if someone has won a game of tic-tac-toe. 
*/
// assumption : its a 3x3 grid

/*
    x o x 
    o o x
    x x o
    row0, row1, row2
    col0, col1, col2,
    diag1, diag2
*/

function didIWin(grid, map){
    let player = grid[map[0][0]][map[0][1]];
    console.log(map, player)
    for (let i of map){
        if (grid[i[0]][i[1]] != player)
            return false;
    }
    return true;
}

function ticTacWin(grid, x="x", o="o"){
    let winSituationMap = new Map();
    for (let i = 0; i < grid.length; i++){
        let tempRow = [];
        for (let j = 0; j < grid[0].length; j++)
            tempRow.push([i,j])
        winSituationMap.set(`row${i}`, tempRow);
    }
    for (let j = 0; j < grid[0].length; j++){
        let tempCol = [];
        for (let i = 0; i < grid.length; i++)
            tempCol.push([i,j])
        winSituationMap.set(`col${j}`, tempCol);
    }
    let tempDiag1 = [];
    let tempDiag2 = [];
    for (let i = 0; i < grid.length; i++){
        tempDiag1.push([i,i]);
        tempDiag2.push([grid.length-1-i,grid.length-1-i]);
    }
    winSituationMap.set('diag1', tempDiag1);
    winSituationMap.set('diag2', tempDiag2);

    for (let i of winSituationMap.keys()){
        if (didIWin(grid, winSituationMap.get(i))){
            return true;
        }
    }
    return false;
}

console.log(ticTacWin([['x','x',''],['o','x','o'],['','x','x']]));
