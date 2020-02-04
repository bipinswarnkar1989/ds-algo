/**
 * @param {number[]} nums
 * @return {number[][]}
 * Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 */
export const  Permutations = function(nums) {
    const result =[];
    for(let i = 0;i < nums.length; i++){
       const el = nums[i];
       const spliced = nums.filter(n => n !== el);
       console.log('el: '+ el);
       console.log('spliced: '+ spliced);
       console.log('Reverse: '+reverse(spliced));
       //const curr = spliced.slice(0, 1, el);
       result.push([ el, ...spliced]);
       result.push([ el, ...reverse(spliced)]);
    }
    return console.log(JSON.stringify(result));
};

const reverse = arr =>{
      //console.log(arr.length)
      for(let j = 0; j < arr.length/2; j++){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    return [ ...arr ];
}
