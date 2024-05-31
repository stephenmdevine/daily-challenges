function likes(names) {
    // TODO

    let firstName = names.length == 0 ? 'no one' : names[0];
    let two = names.length == 2 ? ` and ${names[1]}` : `, ${names[1]}`;
    let secondName = names.length > 1 ? two : '';
    let three = names.length == 3 ? ` and ${names[2]}` : ` and ${names.length - 2} others`;
    let third = names.length > 2 ? three : '';
    let s = names.length <= 1 ? 's' : '';

    console.log(`${firstName}${secondName}${third} like${s} this`);
    
    return `${firstName}${secondName}${third} like${s} this`;
}

  /*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
  */

likes([]);
likes(["Peter"]);
likes(["Jacob", "Alex"]);
likes(["Max", "John", "Mark"]);
likes(["Alex", "Jacob", "Mark", "Max"]);