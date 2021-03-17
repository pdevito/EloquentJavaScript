class Group {
   constructor() {
      this.group = [];
   }

   add(element) {
      if (!this.has(element)) {
         this.group.push(element);
      }
   }

   delete(element) {
      if (this.has(element)) {
         this.group.splice(this.group.indexOf(element), 1);
      }
   }

   has(element) {
      return this.group.indexOf(element) >= 0 ? true : false;
   }

   static from(range) {
      let result = new Group();
      for (let x of range) {
         result.add(x);
      }
      return result;
   }
}


let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false