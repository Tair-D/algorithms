class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let node = makeNode(value);
    if (!this.tail) {
      this.head = this.tail = node;
      return node;
    }

    this.tail.next = node;
    this.tail = node;

    return node;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

function printList(list) {
  let current = list;

  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

function makeNode(value) {
  return {
    value: value,
    next: null,
  };
}

let test = new List();
test.print();
test.append('t');
test.print();
// var deleteNode = function (node) {
//   let one = ListNode(1);
//   let three = ListNode(3);

//   one.next = three;

//   printList(one);
// };

// let res = deleteNode([4, 5, 1, 9]);
