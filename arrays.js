//Arrays in javascript
//ways to create array
let p_names = ["realme", "samsung", "vivo", "iqoo"]; //literal syntax
//let prices = [20000, 30000, 50000, 40000];//literal syntax
let prices = new Array(20000, 30000, 50000, 40000); //object syntax
//to get array values
console.log(p_names[1]); //using index value
for (let names of p_names) {
  console.log(names);
}
//using for each method
let names = p_names.forEach((val) => {
  console.log(val);
}); //call back method
//to add elements
//push(),unshift(),splice()
p_names.push("Oneplus"); //insert at last
console.log(p_names);
p_names.unshift("poco"); //insert at starting
console.log(p_names);
p_names.splice(2, 0, "oppo", "moto"); //insert at specific position
console.log(p_names);
//to remove elements
//pop(),shift(),splice(),delete operator
p_names.pop(); //last element will be removed
console.log(p_names);
p_names.shift(); //first element will be removed
console.log(p_names);
p_names.splice(2, 1); //removes the element at a specific position
console.log(p_names);
// delete p_names[3]; //using delete we can delete an item but the memory will not be removed
// console.log(p_names);
//pportion of an array
//slice method
console.log(p_names.slice(2, 4));
console.log(p_names.slice(-4, -2));
//search elemnts in an array
//indexOf,lastIndexOf,includes,find are the methods
console.log(p_names.indexOf("realme"));
//sorting
//sort
console.log(p_names.sort());
console.log(p_names.reverse());
//array advance methods(ES6)
//reduce
let sum = prices.reduce((total, val) => {
  return total + val;
}); //call back funtion
console.log(sum);
//map
let offprice = prices.map((val) => {
  return val - 5000;
});
console.log(offprice);
//to concat
let p_names1 = ["poco", "onePlus"];
console.log(p_names.concat(p_names1));
//spread operator:used for concatination of arrays`
let brands = [...p_names, ...p_names1];
console.log(brands);
