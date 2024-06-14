const productdetail={
    name:"apple 2020 mackbook air laptop",
    price:82000,
    color:"grey",
    harddisk:"256GB",

};
console.log("below are our product detail");
for (let keys of Object.keys(productdetail)) {
    console.log(`${keys} : ${productdetail[keys]}`);
  }