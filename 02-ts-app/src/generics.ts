// Day 03

// Generic Function
function addAtBeginning<T>(item: T, collection: Array<T>): Array<T> {
  return [item, ...collection];
}

const [newFriend] = addAtBeginning<string>("Monica", [
  "Ross",
  "Rachel",
  "Joey",
]);
console.log(newFriend.toUpperCase());

const [newMarks] = addAtBeginning<number>(99, [98, 93, 91, 89]);
console.log(newMarks);

// Generic Class
class Stack<T> {
  private list: Array<T> = [];

  addItem(item: T) {
    this.list.push(item);
  }

  getList(): Array<T> {
    return this.list.slice(0);
  }

  removeItem(index: number) {
    this.list.splice(index, 1);
  }
}
let stringList = new Stack<string>();
stringList.addItem("Monica");
stringList.addItem("Joey");
stringList.addItem("Ross");
console.log(stringList.getList());
stringList.removeItem(1);
console.log(stringList.getList());

// Generic Interface
interface IResource<T, K> {
  id: T;
  location: K;
}

let ResourceOne: IResource<string, number> = {
  id: "R001",
  location: 20.75,
};

// interface IAccount<T extends Bank> { }
