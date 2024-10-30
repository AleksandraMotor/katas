// Description:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

// version I
function findOutlier(integers) {
    const odds = integers.filter(function (count) {
      return !!(count % 2);
    });
    const evens = integers.filter(function (count) {
      return !(count % 2)
    });
    if (odds.length == 1) {
      return odds.pop();
    };
    return evens.pop();
};
  
 // version II
function findOutlier(integers) {
    const evens = integers.filter(integer => integer % 2 === 0);
    const odds = integers.filter(integer => integer % 2 !== 0);
    return evens.length === 1 ? evens.pop() : odds.pop();
};