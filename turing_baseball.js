function BaseballScore(scores) {

    let i = 0;
    let newRecord = [];
    let nextTurn = false;
    let curChar = "";
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
                curChar = scores[i];
                prevChar = scores[i - 1];
            }
            if (!nextTurn && curChar === "C") {
                newRecord = newRecord.filter(x => x.toString() !== prevChar.toString());
                removedChar = prevChar.toString();
            }
            if (!nextTurn && curChar === "D") {
                lastMultiplied = (removedChar * parseInt(scores[0]));
                newRecord.push(lastMultiplied.toString());
            }
            if (!nextTurn && curChar === "+") {
                const addLastMultipliedWithFirstScore = (lastMultiplied + parseInt(scores[0]))
                newRecord.push(addLastMultipliedWithFirstScore.toString());
            }
            i++;
        }

    }
    return newRecord.reduce((prev, next) => parseInt(parseInt(prev) + parseInt(next)));
}

function isNumber(char) {
    if (typeof char !== 'string') {
        return false;
    }

    if (char.trim() === '') {
        return false;
    }

    return !isNaN(char);
}

const output = BaseballScore(["5", "2", "C", "D", "+"]);

