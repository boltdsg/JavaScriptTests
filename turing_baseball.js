/**
 * @param {scores[]} scores The array of numbers.
 * @return {number} A sum of the total scores
 */
function BaseballScore(scores) {

    let i = 0;
    let newRecord = [];
    let nextTurn = false;
    let currentChar = "";
    let prevChar = "";
    let removedChar = "";
    let lastMultiplied = "";

    if (scores.length === 0) {
        return scores;
    } else {
        while (i < scores.length) {
            let checkisNum = isNumber(scores[i]);
            if (checkisNum) {
                nextTurn = true;
                newRecord.push(scores[i])
            } else {
                nextTurn = false;
                currentChar = scores[i];
                prevChar = scores[i - 1];
            }
            if (!nextTurn && currentChar === "C") {
                newRecord = newRecord.filter(x => x.toString() !== prevChar.toString());
                removedChar = prevChar.toString();
            }
            if (!nextTurn && currentChar === "D") {
                lastMultiplied = (removedChar * parseInt(scores[0]));
                newRecord.push(lastMultiplied.toString());
            }
            if (!nextTurn && currentChar === "+") {
                const addLastMultipliedWithFirstScore = (lastMultiplied + parseInt(scores[0]))
                newRecord.push(addLastMultipliedWithFirstScore.toString());
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



const output = BaseballScore(["5", "2", "C", "D", "+"]);

console.log(output);