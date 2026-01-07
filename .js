// function App() {
//   const name = "vazi";
//   const age = "20";
//   console.log(`my name is${name} and my age is${age}`);
// }
// App();

// //Arrow function
// const App1 = () => {
//   const name = "vazirunnisa";
//   const age = 21;
//   console.log(`my name is ${name} and my age is
//   ${age}`);
// };
// App1();

//Inline or Annomanous
// () => {
//   console.log("hello");
// };
// button.addEventListener("click", () => {
//   console.log("clicked");
// });
// addEventListener();

// const nums = [1, 2, 3, 4];
// const double = (n) => {
//   return n * 2;
// };
// const result = nums.map((n) => n * 2);
// const result1 = nums.map((n) => ({
//   val: n,
//   sq: n * n,
// }));
// console.log(result1);

// const nums = [1, 2, 3, 4, 5];
// const result1 = nums.filter((n) => {
//   return n % 2 === 0;
// });
// console.log(result1);

// const users = [
//   { name: "A", age: 17 },
//   { name: "B", age: 22 },
//   { name: "C", age: 53 },
// ];
// const result = users.filter((u) => u.age >= 18);
// console.log(result);

// //reduce => reducing to single value
// const nums1 = [1, 1, 1];
// function sum(acc, n) {
//   return acc + n;
// }
// //const result11 = nums1.reduce(sum, -3);
// const result11 = nums1.reduce((total, num) => total + num, 0);
// console.log(result11);

// const students = [
//   { name: "A", marks: 40, attendance: 20 },
//   { name: "B", marks: 70, attendance: 30 },
//   { name: "C", marks: 90, attendance: 20 },
// ];
// const total = students.filter((s) => s.marks >= 50);
// students.map((s) => s.marks);
// students.reduce((sum, m) => sum + m, 0);
// console.log(total);
// const total1 = students.filter((s) => s.attendance >= 50);
// students.map((s) => s.attendance);
// students.reduce((sum, a) => sum + a, 0);
// console.log(total1);

//data types=number,boolean,string,undefined,object,BigInt,Symbol
var empid = 1001;
console.log(typeof empid); //number
var emobilenumber = 9555356564;
console.log(typeof emobilenumber);
var esalary = 45000.99;
console.log(typeof esalary);
var ename = "mahesh";
console.log(typeof ename);
var desg = ["developer", "hr", "manager"];
console.log(typeof desg);
var customer_info = {
  c_id: 2005,
  c_name: "mahesh",
  c_address: "guntur",
};
console.log(typeof customer_info);
//advanced data types(ES6)
var tcs_turnover = BigInt(13837777828299199999);
console.log(typeof tcs_turnover);
var p_name = Symbol("Samsung");
var p_name1 = Symbol("Samsung");
console.log(typeof p_name);
console.log(p_name == p_name1);
