/*
    Sum Lists: You have two numbers represented by a linked list, where each node contains a single 
    digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a 
    function that adds the two numbers and returns the sum as a linked list. 
    EXAMPLE 
    Input: (7-) 1 -) 6) + (5 -) 9 -) 2).Thatis,617 + 295. 
    Output: 2 -) 1 -) 9. That is, 912. 
    FOLLOW UP 
    Suppose the digits are stored in forward order. Repeat the above problem. 
    EXAMPLE 
    Input: (6 -) 1 -) 7) + (2 -) 9 -) 5).Thatis,617 + 295. 
    Output: 9 -) 1 -) 2. That is, 912. 

    Runtime : O(h1.length > h2.length ? h1.length : h2.length) => O(n)
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

    sum(num){
        let h1 = this.head;
        let h2 = num.head;
        let sumLinkedList = new linkedList();
        let rem = 0;
        while (h1 && h2){
            let tempSum = String(h1.data + h2.data + rem);
            rem = tempSum.length == 2 ? Number(tempSum[0]) : 0;
            sumLinkedList.add(tempSum.length == 2 ? Number(tempSum[1]) : Number(tempSum[0]));
            h1 = h1.next;
            h2 = h2.next;
        }
        while(h1){
            let tempSum = String(h1.data + rem);
            rem = tempSum.length == 2 ? Number(tempSum[0]) : 0;
            sumLinkedList.add(tempSum.length == 2 ? Number(tempSum[1]) : Number(tempSum[0]));
            h1 = h1.next;
        }
        while(h2){
            let tempSum = String(h2.data + rem);
            rem = tempSum.length == 2 ? Number(tempSum[0]) : 0;
            sumLinkedList.add(tempSum.length == 2 ? Number(tempSum[1]) : Number(tempSum[0]));
            h2 = h2.next;
        }
        if (rem){
            sumLinkedList.add(rem);
        }
        sumLinkedList.display();
    }

}

let num1 = new linkedList();
num1.add(9);
num1.add(9);
num1.add(9);
num1.display();  
let num2 = new linkedList();
num2.add(9);
num2.add(9);
num2.add(9);
num2.display();
num1.sum(num2)
console.log(999 + 999) // 1998 
