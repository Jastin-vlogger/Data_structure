class queue {
  items: Array<any> = [];
  constructor() {
    this.items = [];
  }

  enqueue(element: number) {
    this.items.push(element);
  }
  //this will be O(n) which is linear complexity;
  dequeue() {
    this.items.shift();
  }

  peek() {
    return this.items[0];       
  }

  size() {
    console.log(this.items.length);
  }
  print() {
    console.log(this.items.toString());
  }
}

const q = new queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.dequeue();
q.print();
q.size();
