function longestWord(sen) {
    ///////////////////////////////////////////////////////////
    // let wordMap = {}
    // let wordCount = 0;
    // let longestWord = "";


    // str.split(" ").forEach(word => {

    //     if (wordMap[word]) {
    //         wordMap[word]++;
    //     } else {
    //         wordMap[word] = 1;
    //     }
    // });

    // for (let word in wordMap) {
    //     if (wordMap[word] > wordCount) {
    //         wordCount = wordMap[word];
    //         longestWord = word;
    //     }
    // }

    // return longestWord ;
    ///////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////
    // // Create filtered array
    // const wordArr = sen.toLowerCase().match(/[a-z0-9]+/gi);

    // // Sort by length
    // let sorted = wordArr.sort(function (a, b) {
    //     return b.length - a.length
    // })
    // // if multiple words, put into array
    // let longestWordArr = sorted.filter((word) => {
    //     return word.length === sorted[0].length;
    // });
    // // check if more than one array val
    // if (longestWordArr.length === 1) {
    //     return longestWordArr[0]
    // } else {
    //     return longestWordArr;
    // }
    ///////////////////////////////////////////////////////////
}

function chunkArray(arr, len) {

    ///////////////////////////////////////////////////////////
    // init chunked arr
    // const chunkArr = [];
    // // set index = 0;
    // let i = 0;

    // while (i < arr.length) {
    //     // Slice out from the index to the index + the chunk length and push on to chunk arr
    //     chunkArray.push(
    //         arr.slice(i, i + len)
    //     )
    //     //increment by chunk length
    //     i += len;
    // }
    // return chunkArray
    ///////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////
    // const chunkArr = [];
    // // loop through array
    // arr.forEach((val) => {
    //     // get last
    //     const last = chunkArr[chunkArr.length - 1];
    //     // check if last & last length is equal to the chunk length
    //     if (!last || last.length === len) {
    //         chunkArr.push([val]);
    //     } else {
    //         last.push(val);
    //     }
    // })
    // return chunkArr;
    ///////////////////////////////////////////////////////////
}

function flattenArray(arrays) {
    ///////////////////////////////////////////////////////////
    // return arrays.reduce((a, b) => a.concat(b))
    // return [].concat.apply([], arrays)
    // return [].concat(...arrays);
    ///////////////////////////////////////////////////////////
}

function isAnagram(str, str2) {
    ///////////////////////////////////////////////////////////
    // return formatStr(str1) === formatStr(str2);
    ///////////////////////////////////////////////////////////
}

//helper function
function formatStr(str) {
    ///////////////////////////////////////////////////////////
    // return str
    //     .replace(/[^\w]/g, "")
    //     .toLowerCase()
    //     .split("")
    //     .sort()
    //     .join()
    ///////////////////////////////////////////////////////////
}


// const output =

/*isAnagram("elbow", "below");*/

/*
    flattenArray([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
*/

/*
const chunk = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
console.log(chunk);
*

/*
const long = longestWord("Hello, how are you. Hello am good, how do you know me? tell me how, how")
console.log(long);
*/