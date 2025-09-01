class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}


const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.peek());   
console.log(queue.dequeue());  
console.log(queue.size());     
console.log(queue.isEmpty());  
