var findIt = {
fizzBuzz: function (numb) {
  if (numb % 3 === 0 && numb % 5 === 0 ) {
    return 'FizzBuzz'; 
  } 
  else if (numb % 3 === 0) {
    return 'Fizz';
  }
  else if (numb % 5 === 0) {
    return 'Buzz';
  }
  else {
    return numb;
  }
  
}
}
module.exports = findIt; 

