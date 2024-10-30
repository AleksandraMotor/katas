// Description:
// Additive number is a string whose digits can form an additive sequence.

// Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

// For example:
// "112358" is an additive number because the digits can form an additive sequence: 1, 1, 2, 3, 5, 8

// 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8

// Write

// function findAdditiveNumbers(num)
// that will take in a string and return all the numbers that make up the sequence.


// findAdditiveNumbers('112358') === ['1','1','2','3','5','8']
// findAdditiveNumbers('199100199') === ['1','99','100','199']
// findAdditiveNumbers('1023') === []
// findAdditiveNumbers('112356') === [] // 6 != 5+3
// Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid

function findAdditiveNumbers(num) {
    function check(i, j, num) {
      let array = [+num.slice(0, i), +num.slice(i, j)];
      i = 0;
      num = num.slice(j);
      while (num) {
        let nextNumber = array[i] + array[i+1] + '';
        let nextNumLength = nextNumber.length;
        if (num.slice(0, nextNumLength) != nextNumber) {
          return false;
        };
        array.push(+nextNumber), ++i, num = num.slice(nextNumLength);
      };
      return array.map(x => '' + x);
    };
    
    let inputLength = num.length;
    for (let i = 1; i <= (inputLength / 2); ++i) {
      for (let j = i + 1; j <= (inputLength * 2 / 3); ++j) {
        let result = check(i, j, num);
        if (result) return result;
      };
    };
    return [];
};