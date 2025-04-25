
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

function insertAtFront(head, newData)
{
    // Create a new node with the given data
    const newNode = new Node(newData);

    // Make the next of the new node point to the current
    // head
    newNode.next = head;

    // Return the new node as the new head of the list
    return newNode;
}

// Create a hard-coded linked list:
    // 10 -> 20 -> 30 -> 40
    let head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    head.next.next.next = new Node(40);

    // Example of traversing the node and printing
    traverseLinkedList(head);
