console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  console.log('in hello');
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
console.log("running Hello World!:", hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
console.log('in helloName', name);
return 'hello '+name
}
console.log(helloName("Ismail") );
console.log(helloName("Stacy") );

// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log('in addNumber:', firstNumber, secondNumber);
  let answer = firstNumber + secondNumber;
  // return firstNumber + secondNumber;
  return answer;
} // end addNumbers

console.log('running addNumbers with 2 & 3:', addNumbers(2,3) );


// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2 ){
  console.log('in multiplyThree:', num0, num1, num2);
  let answer = num0 * num1 * num2;
  return answer;
}// end multiplyThree
console.log( 'running multiplyThree with 2, 3 & 4:',  multiplyThree(2,3,4) );


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log('in isPositive', number);
  if ( number > 0 ){
    return true;
  }
    else{
    return false;
    }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log(isPositive(3));
console.log(isPositive(0));
console.log(isPositive(-3));




// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  console.log('in getLast', array);
  let items = [];
  items.pop(array);
  return items;
}// end getLast
console.log('running getLast', getLast());

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  console.log('in find', value, array);
  let hand=['Q','3','J','9' ];
  for(let x=0; x<hand.length; x++)
  if(hand[x]==='8'){
    return true;
  }
  else{
    return false;
  }
}
//could not figure this one out
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
