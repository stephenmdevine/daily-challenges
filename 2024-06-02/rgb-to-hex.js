function rgb(r, g, b) {

    const decToHex = ((num) => {
        switch(num) {
            case 10:
                return "A";
                break;
            case 11:
                return "B";
                break;
            case 12:
                return "C";
                break;
            case 13:
                return "D";
                break;
            case 14:
                return "E";
                break;
            case 15:
                return "F";
                break;
            default:
                return String(num);
        }
    });

    const convert = ((i) => {
        let temp;
        if (i < 0) {temp = 0;}
        else if (i > 255) {temp = 255;}
        else {temp = i;}

        let ones = temp % 16;
        let tens = (temp - ones) / 16;
        ones = decToHex(ones);
        tens = decToHex(tens);
        return `${tens}${ones}`;
    });

    return `${convert(r)}${convert(g)}${convert(b)}`;
}

/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a 
hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values 
that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
*/

console.log(rgb(0,0,32));
console.log(rgb(0,0,31));
console.log(rgb(1,0,165));
console.log(rgb(0,0,255));
console.log(rgb(255,0,255));
console.log(rgb(-30,300,255));