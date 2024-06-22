class CaesarCipher {
    constructor(shift) {
        this.shift = shift;
    }

    encode(word) {
        let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
        let newAlpha = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
        let e = newAlpha.splice(0, this.shift);
        newAlpha.push(...e);
        console.log(newAlpha);

        word = [...word.toLowerCase()];

        let newWord = this.replaceElements(word, alphabet, newAlpha);

        return newWord.join('').toUpperCase();
    }

    decode(scramble) {
        let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
        let newAlpha = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
        let e = newAlpha.splice(-this.shift);
        newAlpha.unshift(...e);
        console.log(newAlpha);

        scramble = [...scramble.toLowerCase()];

        let newScramble = this.replaceElements(scramble, alphabet, newAlpha);

        return newScramble.join('').toUpperCase();
    }

    replaceElements(a3, original, modified) {
        let newArray = a3.map((element, index) => {
            // Find the index of the element in the original array
            let originalIndex = original.indexOf(element);
            // If the element is found in the original array, replace it with the corresponding element from the modified array
            if (originalIndex !== -1) {
                return modified[originalIndex];
            }
            // Otherwise, keep the element as is
            return element;
        });
        return newArray;
    }
  };

  /*
Write a class that, when given a string, will return an uppercase string with each letter shifted 
forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].
  */

let c = new CaesarCipher(5);
console.log(c.encode('What does this do?'));
// console.log(c.decode('BFKKQJX'));