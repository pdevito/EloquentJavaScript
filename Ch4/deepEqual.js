function deepEqual(ele1, ele2) {
   let isEqual = false;
   if (ele1 == undefined || ele2 == undefined) {
      isEqual = undefined;
   } else if (null == ele1 && null == ele2) {
      isEqual = true;
   } else if ((ele1 == null) || (ele2 == null)) {
      isEqual = false;
   } else if (typeof(ele1) == 'object' && typeof(ele2) == 'object') {
      let ele1Keys = Object.keys(ele1);
      let ele2Keys = Object.keys(ele2);
      if (ele1Keys.length == ele2Keys.length) {
         isEqual = true;
         for (let key of ele1Keys) {
            if (!isEqual || !deepEqual(ele1[key], ele2[key])) {
               isEqual = false;
            }
         }
      }
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