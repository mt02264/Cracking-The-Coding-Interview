// 2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list. 
// Runtime : O(size - k) where size - k => O(n)

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

    removeDuplicates(){
        let listMap = new Map();
        let cur = this.head;
        if (cur == null) {
            console.log('Empty List');
        } else {
            listMap.set(cur.data, true);
            while(cur.next){
                let temp = false;
                listMap.get(cur.next.data) ? temp = true : listMap.set(cur.next.data, true);
                if (temp){
                    cur.next = cur.next.next;
                    this.size--;
                } else if (cur.next != null){
                    cur = cur.next;
                }
            }
        }
    }

    displayKth(k){
        let cur = this.head;
        if (this.size <= k) return -1;
        let n = this.size - k;
        if (cur == null) {
            console.log('Empty List');
        } else {
            for (let i = 0; i < n; i++){
                cur = cur.next;
            }
        }
        console.log(cur.data);
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
llist.displayKth(5)
llist.display();

