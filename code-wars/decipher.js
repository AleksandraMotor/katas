// Description:
// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// there are no special characters used, only letters and spaces
// words are separated by a single space
// there are no leading or trailing spaces
// Examples

// '72olle 103doo 100ya' --> 'Hello good day'
// '82yade 115te 103o'   --> 'Ready set go'

function decipherThis(str) {
    let words = str.split(" ");
    let decoded = [];
    
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let char = [];
      let rest = [];
      
      for (let j = 0; j < word.length; j++) {
        if (word[j].match(/\d+/) !== null) char.push(word[j]);
        else rest.push(word[j]);
      };
      
      let firstLetter = String.fromCharCode(char.join(""));
      let lastIndex = rest.length - 1;
      let temp = rest[0];
      rest[0] = rest[lastIndex];
      rest[lastIndex] = temp;
      decoded.push(firstLetter.concat(rest.join("")));
    };
    return decoded.join(" ");
};