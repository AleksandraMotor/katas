// Description:
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
// A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    let space = "";
    let star = "";
    let pyramid = [];
    for (let i = 1; i <= nFloors; i++) {
      space = (" "). repeat(nFloors - i);
      star = ("*").repeat((2 * i) - 1);
      pyramid.push(space + star + space);
    };
    return pyramid;
};