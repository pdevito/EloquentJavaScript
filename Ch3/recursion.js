// 0 is even
// 1 is odd
// For any N, evenness is = N - 2
// Create a recursive function isEven, input any positive number and output boolean

function isEven(num) {
   switch (num) {
      case 0:
         return true;      
         break;
      case 1:
         return false;
         break;
      default:
         return num > 0 ? isEven(num - 2) : undefined;
         break;
   }
}

for (let index = -10; index < 11; index++) {
   console.log(`Is '${index}' even? ${isEven(index)}`);
}