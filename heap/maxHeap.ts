class Heap {
  values: Array<any>;
  constructor() {
    this.values = [];
  }

  parent(i: any) {
    return Math.floor((i - 1) / 2);
  }
  leftChild(i: any) {
    return i * 2 + 1;
  }
  rightChild(i: any) {
    return i * 2 + 2;
  }
  isLeaf(i: any) {
    return (
      i >= Math.floor(this.values.length / 2) && i <= this.values.length - 1
    );
  }
  // isLeaf(index: any) {
  //   return (
  //     index >= Math.floor(this.values.length / 2) &&
  //     index <= this.values.length - 1
  //   );
  // }
  swap(i1: any, i2: any) {
    [this.values[i1], this.values[i2]] = [this.values[i2], this.values[i1]];
  }

  heapifyDown(i: any) {
    if (!this.isLeaf(i)) {
      let leftChild: number = this.leftChild(i);
      let rightChild: number = this.rightChild(i);

      let largestIndex: number = i;
      if (this.values[leftChild] > this.values[largestIndex]) {
        largestIndex = leftChild;
      }

      if (this.values[rightChild] > this.values[largestIndex]) {
        largestIndex = rightChild;
      }

      if (largestIndex !== i) {
        this.swap(i, largestIndex);
        this.heapifyDown(largestIndex);
      }
    }
  }

  extractMax() {
    if (this.values[0] <= 1) {
      return;
    }
    let max: number = this.values[0];
    this.values[0] = this.values.pop();
    this.heapifyDown(0);
    return max;
  }

  add(value: any) {
    this.values.push(value);
    this.heapifyUp(this.values.length - 1);
  }
  heapifyUp(value: any) {
    let child: any = value;
    let parent: any = this.parent(value);
    while (child > 0 && this.values[child] > this.values[parent]) {
      this.swap(child, parent);
      child = parent;
      parent = this.parent(parent);
    }
  }

  print() {
    let i = 0;
    while (!this.isLeaf(i)) {
      console.log("PARENT:", this.values[i]);
      console.log("LEFT CHILD:", this.values[this.leftChild(i)]);
      console.log("RIGHT CHILD:", this.values[this.rightChild(i)]);
      i++;
    }
  }
}

const heap = new Heap();
heap.add(12);
heap.add(17);
heap.add(16);
heap.add(15);
heap.print();
heap.extractMax();
// heap.print();
