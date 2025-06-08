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
