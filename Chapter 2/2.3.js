/*
2.3 Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but 
    the first and last node, not necessarily the exact middle) of a singly linked list, given only access to 
    that node. 
    EXAMPLE 
    Input: the node c from the linked list a - >b- >c - >d - >e- >f 
    Result: nothing is returned, but the new linked list looks like a - >b- >d - >e- >f
*/

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// if given acces to a node, delete that node

function deleteNode(n){
    // determine if its the head or the tail node
    if (n.next == null || n.next.next == null){
        return -1;
    } else{
        // update current node data to the next node data
        // update the current.next to the next node's next
        // update the next node's next to null
        // 1->5->8->9 => delte 5 => 1->8->9 
        // what we have done is we removed the node 8 from the list
        // and update node 5 to mimic what node 8 meant
        n.data = n.next.data;
        n.next = n.next.next;
        n.next.next = null;
    }
}