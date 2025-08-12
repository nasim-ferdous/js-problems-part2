const phones = [
  { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "xoami", price: 18000, camera: "12mp", color: "black" },
  { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
  { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
  { name: "Walton", price: 31000, camera: "12mp", color: "black" },
  { name: "HTC", price: 27000, camera: "12mp", color: "black" },
];

function getExpensivePhone(phones) {
  let expensive = phones[0];
  for (const phone of phones) {
    if (phone.price > expensive.price) {
      expensive = phone;
    }
  }
  return expensive;
}
const expensivePhone = getExpensivePhone(phones);
console.log(expensivePhone);
