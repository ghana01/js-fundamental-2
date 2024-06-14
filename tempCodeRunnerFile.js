function chekresult(name){
   for(let i =0;i<n;i++){
      if(students.name === name){
         if(students.marks>90){
            console.log(`congratulation ${name} u have clear the exam`);
         }
         else{
            console.log("u hava not pass the exam")
         }
         
      }
      else{
         console.log("invalid user")
      }
   }
   chekresult(Mithun);
   chekresult(Farman);
}