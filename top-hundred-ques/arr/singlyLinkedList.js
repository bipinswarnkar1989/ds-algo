
function Node(data) {
  this.val = data;
  this.next = null;
}

function traverseLinkedList(head){
  while(head !== null){
    console.log(head.val)
    head = head.next;
  }
}

// Create a hard-coded linked list:
    // 10 -> 20 -> 30 -> 40
    let head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    head.next.next.next = new Node(40);

    // Example of traversing the node and printing
    traverseLinkedList(head);
