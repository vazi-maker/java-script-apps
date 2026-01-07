//this-keyword
const empInfo = {
  efirstName: "vazi",
  eLastName: "shaik",
  fullName: function () {
    return this.efirstName + " " + this.eLastName;
  },
};
console.log(empInfo.fullName());
