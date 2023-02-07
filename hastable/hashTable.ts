class hashTable {
  table: Array<any>;
  size: any;
  constructor(size: Number) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key: any) {
    let total: number = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
      return total % this.size ;
  }

  set(key: any, value: any) {
    const hash: any = this.hash(key);
    const bucket = this.table[hash];
    if (!bucket) {
      this.table[hash] = [[key, value]];
    } else {
      const sameKey: any = bucket.find((item: any) => item[0] === key);
      if (sameKey) {
        sameKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key: any) {
    const index: any = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKey: any = bucket.find((item: any) => item[0] === key);
      if (sameKey) {
        return sameKey[1];
      }
    }
    return undefined;
  }

  remove(key: any) {
    const index: any = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      let sameKey = bucket.find((item: any) => item[0] === key);
      if (sameKey) {
        bucket.splice(bucket.indexOf(sameKey), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new hashTable(10);
table.set("name", "Bruce");
table.set("age", 25);
table.display();
console.log(table.get("name"));
table.set("mane", "Clark");
table.set("name", "Diana");
console.log(table.get("mane"));
table.remove("name");
table.display();
