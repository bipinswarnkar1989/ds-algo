export const longestCommonPrefix = arr => {
    const sortedArr = arr.sort();
    console.log(sortedArr);
     let pr = '';
     let k = 0;
     const first = sortedArr[0].split('');
     const last =  sortedArr[sortedArr.length - 1].split('');
    //  for(let i = 1; i < sortedArr.length; i++){
    //     const word = sortedArr[i].split('');
    //     for(let j = 0;j < first.length; j++){
    //       if(first[j] === word[j]){
    //         pr += first[j];
    //        // k++;
    //       }
    //     }
    //     break;
    //  }

    for(let j = 0;j < first.length; j++){
            if(first[j] === last[j]){
              pr += first[j];
             // k++;
            }
     }

     console.log(pr);
}

longestCommonPrefix(["flower","flow","flight"]);