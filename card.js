function Cards(inputs) {

  let i = 0;
  let newA = [];

  while (i < inputs.length) {
    const eachCard = inputs[i];

    for (var j = 0; j < eachCard.length; j++) {
      newA.push(eachCard[j]);
    }

    i++;
  }


  // returns duplicate cards
  const rmdup1 = newA.filter((item, index) => {
    if (newA.indexOf(item) !== index) {
      return newA.indexOf(item) !== index;
    }
  })

  if (rmdup1.length > 0) {

    // returns cards with no duplicate
    const highestCard = newA.filter(e => !rmdup1.includes(e)).reduce(function (a, b) {
      return Math.max(a, b);
    });

    // returns the Maximum card or -1
    return (highestCard ? highestCard : -1);

  }

  // Should return -1 if error
  return -1;

}

// Gaming Cards
const highestCard = Cards([
  [4, 5, 1, 1, 3, 3, 13, 5, 4],
  [13, 27, 27, 18, 18, 26, 1000, 1000],
  [40, 50, 70, 12]
]);

console.log(highestCard);