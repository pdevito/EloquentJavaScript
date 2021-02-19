let output = "";
let size = 8;
// " # # # #\n# # # # \n # # # #\n"
// "01010101  10101010  01010101"
// 01010101 [(1+1)%2],[(2+1)%2],[(3+1)%2],[(4+1)%2],[(5+1)%2],[(6+1)%2],[(7+1)%2],[(8+1)%2]
// 10101010 [(1+2)%2],[(2+2)%2],[(3+2)%2],[(4+2)%2],[(5+2)%2],[(6+2)%2],[(7+2)%2],[(8+2)%2]
// Row(i) Column(j) [(i+j)%2]

for (let row = 1; row <= size; row++) {
   for (let column = 1; column <= size; column++) {
      output+=(row+column)%2 == 0?" ":"#";
   }
   if (row%size != 0) output+="\n";
}
console.log(output);
