//objects in js
const movieInfo = {
  title: "bahubali",
  hero: "prabhas",
  director: "ss.Rajmouli",
};
// how to get director name
console.log(movieInfo.director);
console.log(movieInfo["hero"]);
// console.log(movieInfo);
//for in
for (let info in movieInfo) {
  console.log(info);
}
//Advanced methods
//object.keys
Object.keys(movieInfo).forEach((key) => {
  console.log(key);
});
//object.values
Object.values(movieInfo).forEach((value) => {
  console.log(value);
});
//object.entries
Object.entries(movieInfo).forEach((entry) => {
  console.log(entry[0] + " " + entry[1]);
});
for (let [info, infovalue] of Object.entries(movieInfo)) {
  console.log(info + " " + infovalue);
}
//nested object

const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(myObj.cars[0].models);
//car object()
const cartItems = {
  products: [
    { pid: 1001, pname: "drone", price: 15000 },
    { pid: 1002, pname: "Ac", price: 30000 },
  ],
  shippingAddress: { area: "guntur", street: "lr colony", pincode: 500072 },
  userinfo: { name: "john", id: 101 },
};
console.log(cartItems.userinfo.name);
