const SCRIPTS = require("../common/scripts");

function countBy(items, groupName) {
   let counts = [];
   for (let item of items) {
     let name = groupName(item);
     let known = counts.findIndex(c => c.name == name);
     if (known == -1) {
       counts.push({name, count: 1});
     } else {
       counts[known].count++;
     }
   }
   return counts;
}

function characterScript(code) {
   for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
         return code >= from && code < to;
      })) {
         return script;
      }
   }
   return null;
}

function reduce(array, combine, start) {
   let current = start;
   for (let element of array) {
     current = combine(current, element);
   }
   return current;
}

function dominantDirection(text) {
   let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
   }).filter(({name}) => name != "none");
   let script = reduce(scripts, (a, b) => {return a.count >= b.count ? a : b}, {})
   return script.name;
}
 
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl