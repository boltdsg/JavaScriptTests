// function longestWord(sen) {
//   const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
//   const sorted = wordArr.sort((a, b) => b.length - a.length);
//   const longestWordArr = sorted.filter(
//     (word) => word.length === sorted[0].length
//   );
//   // Check if more than one array val
//   if (longestWordArr.length === 1) {
//     return longestWordArr[0];
//   } else {
//     return longestWordArr;
//   }
// }

// function chunkArray(arr, len) {
//   let i = 0;
//   const chunkedArr = [];
//   while (i < arr.length) {
//     chunkedArr.push(arr.slice(i, i + len));
//     i += len;
//   }
//   return chunkedArr;
// }

// function flattenArray(arrays) {
//   return [].concat(...arrays);
//   return arrays.reduce((a, b) => a.concat(b));
//   return arrays.concat.apply([], arrays);
// }

// function isAnagram(str1, str2) {
//   return formatStr(str1) === formatStr(str2);
// }

// // Helper function
// function formatStr(str) {
//   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort(a, b).join("");
// }

// const result = isAnagram("below", "elbow");
/*flattenArray([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
*/
// chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
// longestWord("first server server");
// console.log(result);

// const user = {
//   hello: "welcome to t",
//   sayWl() {
//     console.log(this.hello);
//   },
// };

// setTimeout(user.sayWl(), 1000);

// try {
//   const m = 1;
//   const n = m + z;
//   console.log(n);
// } catch (err) {
//   console.log(err.name);
// }

// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 0);
// Promise.resolve(3).then(console.log);
// console.log(4)

// {
//   console.time("loop");
//   for (var i = 0; i < 1000000; i + 1) {}
//   console.timeEnd("loop");
// }
