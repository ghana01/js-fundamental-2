// Imagine you work for an e-commerce com-any1 
//Your task is to create a function that takes the prices of all
// the -roducts in a customer's cart as in-ut -arameters1 
//The function should then calculate and return the
// total sum of all the -roduct -rices1 This will hel- the com-any 
//easily calculate the total cost of the
// customer's sho--ing cart1

function price(){
    let totalprice=0;
    for(let i=0;i<arguments.length;i++){
        totalprice+=arguments[i];
    }
    console.log(`the total value of cart is ${totalprice}`)
    return totalprice

}
price(30,40,50);