function deepEqual(ele1, ele2) {
   let isEqual = false;
   if (ele1 == undefined || ele2 == undefined) {
      isEqual = undefined;
   } else if (null == ele1 && null == ele2) {
      isEqual = true;
   } else if ((null == ele1 && null != ele2) || (null != ele1 && null == ele2)) {
      isEqual = false;
   } else if (typeof(ele1) == 'object' && typeof(ele2) == 'object') {

   } else {
      isEqual = ele1 === ele2;
   }
   return isEqual;
}




let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true