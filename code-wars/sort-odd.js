// Description:
// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// version I
function sortArray(array) {
    let arrayLength = array.length;
    let odds = [];
    
    for (let i = 0; i < arrayLength; i++) {
      if (array[i] % 2 != 0) odds.push(array[i]);
    };
    
    odds.sort(function (a, b) {return a - b});
    let newIndex = 0;
    
    for (let i = 0; i < arrayLength; i++) {
      if (array[i] % 2 != 0) array[i] = odds[newIndex++];
    };
    
    return array;
}

// version II
function sortArray(array) {
    const odds = array.filter((number) => number % 2).sort((a,b) => a - b);
    return array.map((number) => number % 2 ? odds.shift() : number);
};