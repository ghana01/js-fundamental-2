//1 Imagine you are working for a social media com-any1 
//You have a list of all the users1 Your job is to create a
//function that checks if a s-ecific username is in that list1 
//The function should take the username as in-ut and
//tell you whether it's -resent in the list of users or not1
let list=["ghan","radhe","mithun","prakhar"];
function isinclude(user){
        if(list.includes(user)){
            console.log(`yes, ${user} is valid user`)
        }
        else{
            console.log("no,user is invalid")
        }
    

}
isinclude("mithun");


