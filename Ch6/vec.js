class Vec {
   constructor(x, y) {
      this.x = x;
      this.y = y;
   }

   plus(vec) {
      return new Vec(this.x + vec.x, this.y + vec.y);
   }

   minus(vec) {
      return new Vec(this.x - vec.x, this.y - vec.y);
   }

   get length() {
      return Math.sqrt(Math.pow(this.x - 0, 2) + Math.pow(this.y - 0, 2));
   }
}


// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5