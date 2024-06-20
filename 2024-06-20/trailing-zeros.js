function zeros (n) {
    const logBase = (n) => Math.log(n) / Math.log(5);
    const kMax = Math.floor(logBase(n));

    let sum = 0;
    for (let i = 1; i <=kMax; i++) {
        sum += Math.floor(n / (5**i));
    }

    return sum;
  }

  /*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 *  ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
N	Product	N factorial	Trailing zeros
6	1*2*3*4*5*6	720	1
12	1*2*3*4*5*6*7*8*9*10*11*12	479001600	2
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
  */

zeros(0);
zeros(5);
zeros(6);
zeros(30);