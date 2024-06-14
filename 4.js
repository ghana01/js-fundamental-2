// You are workin. for an e-commerce client,
// and they provide you with an array of objects containin. product
// names and their prices. Your task is to create a function
// that finds the product with the maximum amount
// (the hi.hest price) and the product with the minimum amount (the lowest price)
// and prints them to the
// console.
const products=[
    {name:"laptop", price:120000},
    {name:"mobile",price:70000},
    {name:"watch",price:2000},
    {name:"mobile charger", price:1500},
    {name:"laptop bag", price:20000}
       
];
let maxproduct={name:"",price:0};
let minproduct={name:"",price:Number.MAX_VALUE};
for(let product of products){
    if(product.price>maxproduct.price){
        maxproduct=product;
    }
    if(product.price<minproduct.price){
        minproduct=product;
    }
}
console.log(`the products with maximum amount is ${maxproduct.name} which is price at ${maxproduct.price}`);
console.log(`the products with maximum amount is ${minproduct.name} which is price at ${minproduct.price}`);