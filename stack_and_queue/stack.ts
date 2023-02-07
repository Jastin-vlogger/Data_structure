class stack {
  private items: Array<number>;
  constructor() {
    this.items = [];
  }
  push(element: any) {
    this.items.push(element);
  }
  pop(){
    this.items.pop()
  }
  peek(){
    console.log(this.items[this.items.length-1])
  }
  print(){
    console.log(this.items.toString())
  }
}

var hi = new stack();
hi.push(10)
hi.push(20)
hi.push(30)
hi.pop()
hi.peek()
hi.print()