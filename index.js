//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE




/*
1. Male Count

Write a function that counts the number of males in 
the customer object and return the number of males 
in the customers list.


**HINT: Look at the data in the customer.json file. 

* What kind of loop should you use to iterate over 
the customers array?

* What data type occupies each element of the 
customers array? What type of loop should be used 
then?


*/









function maleCount(array){
  var count = 0;

  for(var i = 0; i <= array.length - 1; i++){
    if(array[i].gender === 'male'){
    count++
    }
  }
  return count;


  
  
};

console.log(maleCount(customers))

/*
2. Female Count

Write a function that counts the number of females in 
the customer object and return the number of 
females in the customers list.


**HINT: Look at the data in the customer.json file. 

* What kind of loop should you use to iterate over 
the customers array?

* What data type occupies each element of the 
customers array? What type of loop should be used 
then?

*/

function femaleCount(array){
  var count = 0;

for(var i = 0; i <= array.length - 1; i++){
 if(array[i].gender === 'female'){
  count++
  }
}
return count;




};

console.log(femaleCount(customers))