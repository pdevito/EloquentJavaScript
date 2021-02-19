let output = '';
for (let index = 1; index <= 100; index++) {
   output = index%3 == 0?'fizz':'';
   output += index%5 == 0?'buzz':'';
   if (output.length == 0) {
      output = index.toString();
   }
   console.log(output);
}