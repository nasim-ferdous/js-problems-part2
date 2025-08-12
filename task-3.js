// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function totalBuget(lap, tab, mob) {
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;
  let totalLaptop = laptop * lap;
  let totalTablet = tablet * tab;
  let totalMobile = mobile * mob;
  let total = totalLaptop + totalTablet + totalMobile;
  return total;
}
const values = totalBuget(1, 2, 3);
console.log(values);
