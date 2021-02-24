// Write a function countBs, that counts B's.
// Function takes a string as a parameter and returns a count
// Count the number of capital B's only.
// Write a function countChar that abstracts the logic of countBs

function countChar(input, letter) {
   let count = 0;

   if (input == undefined || isNaN(input.length) || letter == undefined) return undefined;
   for (let index = 0; index < input.length; index++) {
      if (input[index] === letter) count++;
   }

   return count;
}

function countBs(input) {
   return countChar(input, 'B');
}

console.log(countBs('BBB'));
console.log(countBs('bbb'));
console.log(countBs('BbB'));
console.log(countBs('asdE'));
console.log(countBs(''));
console.log(countBs(5));
console.log(countBs());