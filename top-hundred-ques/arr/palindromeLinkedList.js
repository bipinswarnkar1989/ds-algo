var isPalindrome = function(head) {
  let arr = [], curr = head
  
  while(curr) {
      arr.push(curr.val);
      curr = curr.next
  }
    
  for(let i = 0;i < arr.length/2;i++) {
      if(arr[i] !== arr[arr.length - i - 1]){
          return false;
      }
  }
    return true;
};

var isPalindromeOptimized = function(head) {
    if (!head || !head.next) return true;
    
    let slow = head, fast = head;
    
    // Step 1: Find the middle
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    //when fast will be at last or null slow will be at middle
    // // Step 2: Reverse second half
    let reversedMiddleHalf = reverseLl(slow);
    let curr = head;
    
    // check if palindrome
    while(reversedMiddleHalf) {
        if(reversedMiddleHalf.val !== curr.val) {
            return false
        }
        reversedMiddleHalf = reversedMiddleHalf.next;
        curr = curr.next;
    }
    return true;
};

function reverseLl(head) {
    let curr = head, prev = null;
    
    while(curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

/* Optimized Big O:
| Operation       | Complexity |
| --------------- | ---------- |
| Find middle     | O(n)       |
| Reverse half    | O(n)       |
| Compare halves  | O(n)       |
| Total **Time**  | **O(n)**   |
| Total **Space** | **O(1)**   |
*/
