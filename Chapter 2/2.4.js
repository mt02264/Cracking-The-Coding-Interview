/*
    Partition: Write code to partition a linked list around a value x, such that all nodes less than x come 
    before all nodes greater than or equal to x. lf x is contained within the list, the values of x only need 
    to be after the elements less than x (see below). The partition element x can appear anywhere in the 
    "right partition"; it does not need to appear between the left and right partitions. 
    EXAMPLE 
    Input: 3 -> 5 -> 8 -> 5 - > 10 -> 2 -> 1 [partition = 5) 
    Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8 
    
    Runtime : O(n) where n = size of linked list
*/

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(elem){
        let node = new Node(elem);

        if (this.head == null) {
            this.head = node;
        } else {
            let  current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    
    display(){
        let cur = this.head;
        let data = [];
        if (cur == null) {
            console.log('Empty List');
        } else {
            data.push(cur.data);
            cur = cur.next;
            while(cur.next){
                data.push(cur.data);
                cur = cur.next;
            }
            data.push(cur.data);
        }
        console.log(data);
    }

    partitionAroundX(x){
        let cur = this.head; 
        let minList = [];
        let maxList = [];
        while(cur.next){
            if (cur.data < x){
                minList.push(cur.data);
            } else {
                maxList.push(cur.data);
            }
            cur = cur.next;
        }
        cur = this.head;
        for (let i = 0; i < minList.length; i++){
            cur.data = minList[i];
            cur = cur.next;
        }
        for (let i = 0; i < maxList.length; i++){
            cur.data = maxList[i];
            cur = cur.next;
        }
    }

}

let llist = new linkedList();
llist.add(12);
llist.add(13);
llist.add(20);
llist.add(10);
llist.add(10);
llist.add(20);
llist.add(13);
llist.add(20);
llist.add(10);
llist.add(20);
llist.add(20);
llist.display();
llist.partitionAroundX(13)
llist.display();

