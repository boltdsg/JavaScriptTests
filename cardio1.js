//Reverse string
function reverseString(str) {
  //   return str.split("").reverse().join("");

  ////////////////////////////////////
  let revString = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     revString = revString + str[i];
  //   }
  // return revString;

  ////////////////////////////////////
  //   for (let i = 0; i <= str.length - 1; i++) {
  //     revString = str[i] + revString;
  //   }

  ////////////////////////////////////
  //   for (let char of str) {
  //     revString = str[char] + revString;
  //   }

  ////////////////////////////////////
  //   str.split("").forEach((char) => {
  //     revString = char + revString;
  //   });

  ////////////////////////////////////
  //   return str.split("").reduce((revString, char) => char + revString, "");
}
// console.log(reverseString("samuel"));

function isPalindrome(str) {
  //   return str.split(" ").reverse().join("") === str;
}
// console.log(isPalindrome("racecar"))

function reverseInt(int) {
  //   const revString = int.toString().split("").reverse().join("");
  //   return parseInt(revString) * Math.sign(int);
}
// console.log(reverseInt(123));

function capitalizeLetters(str) {
  //   const strArr = str.toLowerCase().split(" ");
  //   for (let i = 0; i < strArr.length; i++) {
  //     strArr[i] =
  //       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  //   }
  //   return strArr.join(" ");
  ////////////////////////////////////
  //   return str
  //     .toLowerCase()
  //     .split(" ")
  //     .map((word) => word[0].toUpperCase() + word.substr(1))
  //     .join(" ");
}
// console.log(capitalizeLetters("i love javascript"));

function maxCharacters(str) {
  //   let charMap = {};
  //   str
  //     .replace(/\b[a-z]/gi)
  //     .split("")
  //     .forEach((char) => {
  //       if (charMap[char]) {
  //         charMap[char]++;
  //       } else {
  //         charMap[char] = 1;
  //       }
  //     });
  //   return charMap;
}
// console.log(maxCharacters("samuel is coming home right to this place now"));

function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    }
    if (i % 3 === 0) {
      console.log("FIZZ");
    } else if (i % 5) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

const result = fizzBuzz();
console.log(result);
