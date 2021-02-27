// Write a range function that takes two arguments, start and end
// and returns an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.

function range(start, end, step) {
   // handle undefined [step] parameter
   if (step === undefined) {
      if (start > end) step = -1;
      else step = 1;
   }

   // handle a zero step (this would result in a infinitely running program)
   if (step == 0) {
      console.log('A step of zero is invalid!');
      return undefined;
   }

   if ((step > 0 && start >= end) || (step < 0 && start <= end)) {
      return [start];
   }
   else {
      return [start].concat(range(start + step, end, step));
   }
}

const sum = ([start, ...numbers]) => { return numbers.length == 0 ? start : start + sum(numbers); };

console.log(range(1,5));
console.log(sum(range(1,5)));
console.log(range(5,5));
console.log(sum(range(5,5)));
console.log(range(6,5));
console.log(sum(range(6,5)));
console.log(range(4,5));
console.log(sum(range(4,5)));
console.log(sum([1,2,3,4]));
console.log(sum([]));