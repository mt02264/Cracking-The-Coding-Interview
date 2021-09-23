/*
    16.3 Intersection: Given two straight line segments (represented as a start point and an end point), 
    compute the point of intersection, if any. 
*/

function intersection(line1, line2){
    let m1 = (line1.end.y - line1.start.y) / (line1.end.x - line1.start.x);
    let c1 = m1*line1.start.x + line1.start.y;
    let m2 = (line2.end.y - line2.start.y) / (line2.end.x - line2.start.x);
    let c2 = m2*line2.start.x + line2.start.y;
    // m1x+c1 = m2x+c2 => (m1 - m2)x = (c2 - c1) => x = (c2 - c1) / (m1 - m2)
    let newX = (c2 - c1) / (m1 - m2);
    let newY = m1 * newX + c1;
    let newY2 = m2 * newX + c2;
    console.assert(newY == newY2, "Not a point of intersection");
    return getPoint(newX, newY);
    
}

function getPoint(x,y){
    return {x:x, y:y};
}

function getLine(p1, p2){
    return {start: p1, end: p2};
}

console.log(intersection(getLine(getPoint(1,1), getPoint(3,3)), getLine(getPoint(1,3), getPoint(3,1))));
