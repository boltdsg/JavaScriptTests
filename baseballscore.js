/**
 * @param {scores[]} scores The array of numbers.
 * @return {number} A sum of the total scores
 */
function BaseballScore(scores) {

    let i = 0;
    var newRecord = [];
    let nextTurn = false;
    let currentChar = "";
    let prevChar = "";
    let lastMultiplied = "";

    if (scores.length === 0) {
        return scores;
    } else {
        while (i < scores.length) {
            let checkisNum = isNumber(scores[i]);

            if (checkisNum) {
                nextTurn = true;
                newRecord.push(scores[i].toString())
            } else {
                nextTurn = false;
                currentChar = scores[i].toString();
                prevChar = scores[i - 1].toString();
            }
            if (!nextTurn && currentChar === "C") {
                newRecord = newRecord.filter(x => x !== prevChar);
                removedChar = prevChar;
            }
            if (!nextTurn && currentChar === "D") {
                lastMultiplied = (parseInt(newRecord[newRecord.length - 1]) * 2);
                newRecord.push(lastMultiplied.toString());
            }

            if (!nextTurn && currentChar === "+") {
                newRecord.push((parseInt(newRecord[newRecord.length - 2]) + parseInt(newRecord[newRecord.length - 1])).toString())
            }
            i++;
        }

    }
    // Checks if is a number that is passed or a string
    function isNumber(char) {
        if (typeof char !== 'string') {
            return false;
        }

        if (char.trim() === '') {
            return false;
        }

        return !isNaN(char);
    }


    return newRecord.reduce((prev, next) => parseInt(parseInt(prev) + parseInt(next)));
}



const output = BaseballScore(["5", "-2", "4", "C", "D", "9", "+", "+"])
//27
// const output = BaseballScore(["5", "2", "C", "D", "+"]);
// 30

console.log(output);