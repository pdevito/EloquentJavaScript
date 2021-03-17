class Group {
   constructor() {
      this.elements = [];
   }

   add(element) {
      if (!this.has(element)) {
         this.elements.push(element);
      }
   }

   delete(element) {
      if (this.has(element)) {
         this.elements.splice(this.elements.indexOf(element), 1);
      }
   }

   has(element) {
      return this.elements.indexOf(element) >= 0 ? true : false;
   }

   static from(range) {
      let result = new Group();
      for (let x of range) {
         result.add(x);
      }
      return result;
   }
}

class GroupIterator {
   constructor(group) {
      this.index = 0;
      this.group = group;
   }
 
   next() {
      if (this.index == (this.group.elements.length)) return {done: true};
   
      let value = this.group.elements[this.index];
      this.index++;
      return {value, done: false};
   }
}

Group.prototype[Symbol.iterator] = function() {
   return new GroupIterator(this);
};

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (let value of Group.from(["a", "b", "c"])) {
   console.log(value);
}
 // → a
 // → b
 // → c