class node {
  left: any;
  right: any;
  value: any;
  constructor(value: any) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class binarySearchTree {
  root: any;
  constructor() {
    this.root = null;
  }

  insert(value: any) {
    let newNode = new node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertLeftOrRight(this.root, newNode);
    }
  }

  insertLeftOrRight(root: any, value: any) {
    if(value.value < root.value){
      if(root.left === null){
        root.left = value;
      }else{
        this.insertLeftOrRight(root.left, value)
      }
    }else{
      if(root.right === null){
        root.right = value;
      }else{
        this.insertLeftOrRight(root.right, value)
      }
    }4
  }
//@ts-ignore
  search(root: any, value: any) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrder(root:any){
    if(root){
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root:any){
    if(root){
      this.preOrder(root.left);
      console.log(root.value);
      this.preOrder(root.right);
    }
  }

  postOrder(root:any){
    if(root){
      this.preOrder(root.left);
      console.log(root.value);
      this.preOrder(root.right);
    }
  }
//@ts-ignore
  min(root:any){
    if(!root.left){
      return root.value
    }else{
      return this.min(root.left)
    }
  }
//@ts-ignore
  max(root:any){
    if(!root.right){
      return root.value;
    }else{
      return this.max(root.right)
    }
  }

  levelOder(){
    const Queue:Array<any> =[];
    Queue.push(this.root);
    while(Queue.length){
      let curr = Queue.shift();
      console.log(curr.value)
      if(curr.left){
        Queue.push(curr.left)
      }
      if(curr.right){
        Queue.push(curr.right)
      }
    }
  }

  deleteNode(root:any, value:any) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new binarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(5);
bst.insert(3);
bst.insert(50);
bst.insert(100);
console.log(bst.search(bst.root,5))
// bst.preOrder(bst.root)
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);
console.log(bst.min(bst.root))
console.log(bst.max(bst.root))
bst.levelOder()





{/*@ts-ignore */}
