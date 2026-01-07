//without closure
let counter = 1; //global variable
const counterResult = () => {
  let counter = 0; //local variable
  counter += 1;
  return counter;
};
console.log(counterResult());
console.log(counterResult());
console.log(counterResult());
