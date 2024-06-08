function findMissingLetter(array) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    letters = (array[0] === array[0].toUpperCase() ? letters.toUpperCase() : letters);
    let letterArr = letters.split('');

    letterArr.splice(0,letterArr.indexOf(array[0]));
    letterArr.splice(letterArr.indexOf(array[array.length-1])+1,letterArr.length-1);
    console.log(letterArr);

    let missing = letterArr.filter(e => !array.find(f => f.match(e)));
    console.log(missing);
  return missing.toString();
}

/*
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
*/

console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));
