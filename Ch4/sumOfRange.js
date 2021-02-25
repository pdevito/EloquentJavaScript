// Write a range function that takes two arguments, start and end
// and returns an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.

function range(start, end) {
   if (start >= end) {
      return [end];
   }
   else {
      return range(start + 1, end).push(start);
   }
}

console.log(range(1,5));
console.log(range(5,5));
console.log(range(6,5));