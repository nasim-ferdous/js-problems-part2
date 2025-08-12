const disa = 56;
const salman = 76;
if (disa > salman) {
  console.log("Disha will get the strawberry");
} else {
  console.log("Salman will get the strawberry");
}
// inside a function
function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const max = getMax(56, 88);
const max2 = getMax(99, 88);
const ultimateMax = getMax(max, max2);
console.log("The max number is:", max);
console.log("The max number is:", max2);
console.log("The max number is:", ultimateMax);
