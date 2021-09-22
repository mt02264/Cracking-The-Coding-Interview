/*
    Stack Min: How would you design a stack which, in addition to push and pop, has a function min 
    which returns the minimum element? Push, pop and min should all operate in 0(1) time. 

*/

class node{
    constructor(data){
        this.data = data;
        this.min = Infinity;
    }
}

// adding at the end of linked list
function addNode(data){
    // before adding, peek at the last element currently on stack
    // peek() => returns  the last node
    // let lastNode = peek();
    // let lastMin = lastNode.min;
    let nodeToAdd = new node(data);
    nodeToAdd.min = lastMin < data ? lastMin : data;
}

function min(){
    let lastNode = peek();
    return lastNode.min;
}