
function Cards(inputs) {

  let i = 0;
  let newA = [];

  while(i < inputs.length) {
    const eachCard = inputs[i];
    const remF = Math.max(...eachCard.filter(function(item, pos) {
        return eachCard.indexOf(item) == pos;
    }));
    newA.push(remF);
    i++;
  }

  // returns only the highest card and don't involve duplicate
  return Math.max(...newA) ?? -1;
}

const highestCard = Cards([
  [1,3,3,7, 7],
  [1,2,3,9, 9],
  [1,1,1]
]);

console.log(highestCard)
