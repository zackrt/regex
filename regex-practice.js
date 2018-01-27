// Challenge
// Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 

//  + 

// Sample Test Cases
// Input:"+d+=3=+s+"
// Output:"true"


// Input:"f++d+"
// Output:"false"

function SimpleSymbols(str) { 
  //^='does it start with?' , .test is ReGex, ^ is also ReGex, $ 'does it end with?'
  if(/^[a-zA-Z]/.test(str) ||
     /[a-zA-Z]$/.test(str) || 
     /[^\+][a-zA-Z]/.test(str) || 
     /[a-zA-Z][^\+]/.test(str)) {
  return false;
  }
  
  return true;
}


console.log(SimpleSymbols("++d+===+c++==a"))
console.log(SimpleSymbols("+d+=3=+s+"))
console.log(SimpleSymbols("f+=+gp+d+"))
console.log(SimpleSymbols("f++d+"))