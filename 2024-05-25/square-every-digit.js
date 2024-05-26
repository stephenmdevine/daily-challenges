function squareDigits(num){
    // Create array to store each number's digit as an element as a string
    let splitNum = [];
    splitNum = num.toString().split("");
    
    // Variable to store the string of squared numbers
    let squaredNumString = "";
    
    // Loop to create the complete squared number string
    for (let i = 0; i < splitNum.length; i++) {
      let digit = Number(splitNum[i]);        // Converts the ith element into a number
      let square = digit ** 2;                // Squares that ith element
      squaredNumString += square.toString();  // Converts that square into a string and adds it to the end of the complete squared number string
    }
    
    return Number(squaredNumString);
  }