import compare from "./calculators.js";

// array
const numberList = [[5, 4], [3, 4], [0, 0], [25, 30], [157, 1]];

//for (let i = 0; i < numberList.length; i++) {
 //   if (numberList[i][0] != numberList[i][1]) {

   //     compare(numberList[i][0], numberList[i][1]);
 //   }
//}

numberList.map(([x, y]) => {
  return compare(x, y);
});