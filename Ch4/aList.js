// function arrayToList takes an array and outputs a list.
// function prepend creates new list element and prepends it
// function nth takes a list and a number and returns the nth element.
//     nth(rest, n-1)
// list is {value, rest}, value is int and rest is another list element

function arrayToList(input) {
   
}

function listToArray(list) {

}

function prepend(element, list) {

}

function nth(list, n) {
   return n == 0 ? list.value : nth(list.rest, n-1);
}