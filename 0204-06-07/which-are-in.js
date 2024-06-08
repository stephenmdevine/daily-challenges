function inArray(a1, a2) {
    let boolArr = Array(a1.length).fill(false);
    
    for (let i = 0; i < a1.length; i++) {
        for (word in a2) {
            if (a2[word].includes(a1[i])) {
                boolArr[i] = true;
            }
        }
    }
    
    let newArr = [];
    for (let i = 0; i < a1.length; i++) {
        if (boolArr[i]) {
            newArr.push(a1[i]);
        }
    }
    
    return newArr.sort();
  }

  /*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.
  */


a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

inArray(a1, a2);