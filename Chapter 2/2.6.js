/*
    2.6 Palindrome: Implement a function to check if a linked list is a palindrome. 
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

    isPalindrome(){
        let cur = this.head;
        // TO DO
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

