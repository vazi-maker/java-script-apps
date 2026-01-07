//call method
const productInfo = {
  pDetails: function (rating, price) {
    return this.pId + " " + this.pName + " " + rating + " " + price;
  },
};
const product = {
  pId: 1001,
  pName: "Iqoo",
};
console.log(productInfo.pDetails.call(product, 4, 10000));
