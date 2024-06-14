// Imagine you are given a list of student objects, 
// each containing the student's name and their marks1 Your
// task is to create a function that checks results by filtering out students 
// whose score is more than 90 and
// prints a message saying, "Congratulations [Student Name]!
//  You have cleared the exam1"
const students = [
   {
     name: "Mithun",
     marks: 95,
   },
   {
     name: "Prabir",
     marks: 75,
   },
   {
     name: "Alka",
     marks: 92,
   },
   {
     name: "Shivam",
     marks: 70,
   },
   {
     name: "Farman",
     marks: 99,
   },
 ];
 let n=students.length;
 console.log(n);

 
function chekresult(user){
   for(let i =0;i<n;i++){
      if(students[i].name === user){
         if(students[i].marks>90){
            console.log(`congratulation ${user} u have clear the exam`);
            
         }
         else{
            console.log("u hava not pass the exam")
         }
         break;
         
      }
      else{
         console.log("invalid user")
      }
   }
   
}
chekresult("Mithun");
   chekresult("Farman");