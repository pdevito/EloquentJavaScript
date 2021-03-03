// function arrayToList takes an array and outputs a list.
// function prepend creates new list element and prepends it
// function nth takes a list and a number and returns the nth element.
//     nth(rest, n-1)
// list is {value, rest}, value is int and rest is another list element

function arrayToList(input) {
   return input == undefined ? undefined : {value: input.shift(), rest: input.length == 0 ? null : arrayToList(input)};
}

function listToArray(list) {
   return list == undefined || list.value == undefined ? undefined : list.rest == null ? [list.value] : [list.value].concat(listToArray(list.rest));
}

function prepend(element, list) {
   return element == undefined ? undefined : {value: element, rest: list == undefined ? null : list}
}

function nth(list, n) {
   return n == 0 ? list.value : nth(list.rest, n-1);
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20