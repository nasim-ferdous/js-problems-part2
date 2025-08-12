// Task -2:
// Find the friend with the smallest name.
const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

function smallestName(numbers) {
  let smallest = numbers[0];
  for (const number of numbers) {
    if (number.length < smallest.length) {
      smallest = number;
    }
  }
  return smallest;
}
console.log(smallestName(heights2));
