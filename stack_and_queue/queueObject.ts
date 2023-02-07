class QueueObjects {
    items : object = {}
    front: number = 0;
    rear:number = 0;
    constructor() {
        this.items;
        this.front;
        this.rear;
    }
    enqueue(element:number){
        this.items[this.rear] = element;
        this.rear++;
    }
    dequeue(){
        const value = this.items[this.front];
        delete this.items[this.front]
        this.front++;
        console.log(value );
        return value;
    }
    print(){
        console.log(this.items)
    }
}

const Q = new QueueObjects();
Q.enqueue(10)
Q.enqueue(20)
Q.enqueue(30)
Q.print();
Q.dequeue()
Q.print();