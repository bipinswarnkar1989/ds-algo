function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    
    let prefix = strs[0]; // Start with the first string
    
    for (let i = 1; i < strs.length; i++) { console.log('for loop runs with: i='+ i)
        // Reduce prefix until it matches the current string
        while (strs[i].indexOf(prefix) !== 0) { console.log('while loop runs with: prefix='+ prefix)
          console.log(strs[i].indexOf(prefix)+ ' pref: '+ prefix)
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
      console.log(strs[i] + ' : PFR: '+ prefix)
    }
    
    return prefix;
}

const Input = ["dog", "racecar", "car"]
// Output: "fl"

longestCommonPrefix(Input);

/*
strs = ["dog", "racecar", "car"]

1) Interation 1
   prefix = "dog", 
   for loop runs: i = 1, 
      while loop runs: (1) "racecar".indexOf("dog") !== 0 is true
                               prefix = "do"
                       (2) "racecar".indexOf("do") !== 0 is true
                               prefix = "d"
                       (3) "racecar".indexOf("d") !== 0 is true
                               prefix = ""
                    --------function ends with return "";---------

*/

/*
strs = ["flower","flow","flight"]

1) Iteration 1
   prefix = "flower"
   for loop runs: i = 1
      while loop runs: (1) "flow".indexOf("flower") !== 0 is true
                               prefix = "flowe"
                       (2) "flow".indexOf("flowe") !== 0 is true
                               prefix = "flow"
                       (3) "flow".indexOf("flow") !== 0 false ------BOOM-----💥 
      while loops ends with prefix = "flow"
      
2) Iteration 2
   prefix = "flow"
   for loop runs: i = 2,
       while loop runs: (1) "flight".indexOf("flow") !== 0 is true
                              prefix = "flo"
                        (2) "flight".indexOf("flo") !== 0 is true
                              prefix = "fl"
                        (3)  "flight".indexOf("fl") !== 0 is false  ------BOOM-----💥 
        while loop ends with prefix = "fl"
   ----------FUnction ends with return "fl"
                       
*/
