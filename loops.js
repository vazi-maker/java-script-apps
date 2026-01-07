//loops in js
//1.for loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
//whole loop
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
//do while loop
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);
//new loops in ES6
//1. for in 2.for of.(this loops are used to reteive data from iterables(arrays))
// let p_names = ["realme", "samsung", "iqoo", "vivo"];
// for (let i of p_names) {
//   console.log(i);
// }
// for (let i in p_names) {
//   console.log(i);
// }
// let emp_info = {
//   emp_id: 1001,
//   emp_name: "vazi",
//   emp_salary: 60000,
// };
// for (let info in emp_info) {
//   console.log(emp_info[info]);
// }
//how to retrieve from string
let collegename = "vignan lara";
for (let chaaracter of collegename) {
  console.log(chaaracter);
}
for (let chaaracter in collegename) {
  console.log(collegename[chaaracter]);
}
