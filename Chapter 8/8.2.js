/*
    8.2 Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns. 
    The robot can only move in two directions, right and down, but certain cells are "off limits" such that 
    the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to 
    the bottom right.
*/

function robotInAgrid(grid, initPos){
    let r = grid.length;
    let c = grid[1].length;
    if (r < 1 || c < 1) return -1;
    let curPos = initPos;
    let finalPos = grid[r-1][c-1];
    if (curPos == finalPos) return 1;
    else {
        console.log(curPos);
    }
}