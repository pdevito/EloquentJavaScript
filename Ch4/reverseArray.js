function reverseArray(input) {
   return input == undefined || input.length == 0 ? undefined : input.length == 1 ? input : [input.pop()].concat(reverseArray(input));
}

function reverseArrayInPlace(input) {
   let temp = 0;
   for (let index = 0; index < Math.floor(input.length / 2); index++) {
      temp = input[index];
      input[index] = input[input.length - index - 1];
      input[input.length - index - 1] = temp;
   }
}


console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArray([1]));
console.log(reverseArray([]));
console.log(reverseArray());

let testArray = [1,2,3,4,5];
let testArray2 = [1,2,3,4,5,6,7,8];
reverseArrayInPlace(testArray);
console.log(testArray);
reverseArrayInPlace(testArray2);
console.log(testArray2);