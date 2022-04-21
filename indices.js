/**
 * @param {number[]} numbers The array of numbers.
 * @param {number} sum The required target sum.
 * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
 */
function findTwoSum(numbers, sum) {
  // Your code goes here
  let i = 0;
  let dataHolder = [];
  let dupCheck = [];

  while(i < numbers.length){
    for(var j = 0; j < numbers.length; j++){
      const checkSum = ((numbers[i] + numbers[j]) === sum);

      if(checkSum){
        if(!dupCheck.includes(numbers[j])){
          dupCheck.push(numbers[i]);
          dataHolder.push(`${i} and ${numbers[i]} (or ${numbers[i]} and ${i}) as ${numbers[i]} + ${numbers[j]} = ${numbers[i] + numbers[j]}`);
        }
        break;
      }
    }

    i++;
  }
  return (dataHolder.length > 0) ? dataHolder :null;

}

const indices = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10);
console.log(indices);
