function max(numbers) {
  let result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > result) {
      result = numbers[i];
    }
  }
  return result;
}
console.log(max([1, 2, 4, 5])); // result to 5
console.log(max([5, 2, 7, 1, 6])); // result to 7
