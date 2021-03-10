const every = (array, test) => array.length == 0 ? test([]) : test(array.shift()) && every(array, test);

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true