// Write a version of every using the some method
// every = a && b && c && ...
// !every = !(a && b && c)
// every = !(!(a && b && c)) = !(!a || !b || !c || ...)

function every(array, test) {
   return !array.some(
      (element) => {return !test(element);}
   );
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true