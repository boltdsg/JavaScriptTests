function reverseString(str) {
    //   return str.split("").reverse().join("");



    ///////////////////////////////////////////////////////////
    // let revString = "";

    // for(let i = str.length - 1; i >= 0; i--){
    //     revString = revString + str[i];
    // }

    // return revString
    ///////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////
    // let revString = "";
    // for(let char of str){
    //     revString = char + revString;
    // }
    // return revString
    ///////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////
    // let revString = '';
    // str.split('').forEach(char => {
    //     revString = char+ revString;
    // });
    // return revString;
    ///////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////
    // return str.split("").reduce((prev, next) => (
    //     next + prev
    // ))
    ///////////////////////////////////////////////////////////
}

function isPalindrome(str) {
    ///////////////////////////////////////////////////////////
    // return (str.split("").reverse().join("") === str);
    ///////////////////////////////////////////////////////////
}

function reverseInt(int) {
    ///////////////////////////////////////////////////////////
    // const revString = int.toString().split("").join("");
    // return parseInt(revString) * Math.sign(int);
    ///////////////////////////////////////////////////////////
}

function capitalizeLetters(str) {
    ///////////////////////////////////////////////////////////
    // const strArr = str.toLowerCase().split(" ");
    // for (let i = 0; i < strArr.length; i++) {
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() +
    //         strArr[i].substring(1);
    // }
    // return strArr.join(" ");
    ///////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////
    // return str.toLowerCase().split(" ").map((word) => (
    //     word[0].toUpperCase() + word.substr(1)
    // )).join(" ")
    ///////////////////////////////////////////////////////////

}

function maxCharacter(str) {

    ///////////////////////////////////////////////////////////
    // var charMap = {};
    // let maxMnum = 0;
    // let maxChar = "";

    // str.split('').forEach(char => {
    //     if (charMap[char]) {
    //         charMap[char]++;
    //     } else {
    //         charMap[char] = 1;
    //     }
    // });

    // for(let char in charMap){
    //     // debugger;
    //     if(charMap[char] > maxMnum){
    //         maxMnum = charMap[char];
    //         maxChar = char;
    //     }
    // }

    // return maxChar;
    ///////////////////////////////////////////////////////////

}

function fizzBuzz() {

    ///////////////////////////////////////////////////////////
    // for (let i = 1; i <= 100; i++) {
    //     if (i % 3 === 0 && i % 5 === 0) {
    //         console.log('fizBuzz')
    //     } else if (i % 3 === 0) {
    //         console.log("Fizz")
    //     } else if (i % 5 === 0) {
    //         console.log("Buzz")
    //     }
    // }
    ///////////////////////////////////////////////////////////
}

/*
const fiz = fizzBuzz();
console.log(fiz);
*/

/*
const max = maxCharacter("which character is most in the string");
*/

/*
const cap = capitalizeLetters("samuel is here");
console.log(cap);
*/

/*
const revInt = reverseInt(-123);
console.log(revInt)
*/


/*
const Palindrome = isPalindrome("racecar");
console.log(Palindrome);
*/