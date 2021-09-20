// 2.1 Remove Dups: Write code to remove duplicates from an unsorted linked list. 
// Runtime : O(n) where n is the length of the list
// Q: How would you solve this problem if a temporary buffer is not allowed? 
// A: Keep two pointers. for each data, search the entire linked
//    list for duplicates, if found, delete the node

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
llist.add(20);
llist.add(20);
llist.display();
llist.removeDuplicates();
llist.display();

