//call back function as annonymous function
let prices = [20000, 30000, 40000, 50000];
const newprices = prices.map((val) => {
  return val - 5000;
});
console.log(newprices);
//callback function with name
function sample() {
  console.log("hi");
}
function demo(callback) {
  return callback;
}
demo(sample());
