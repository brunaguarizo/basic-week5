/*
***Syntax IF ELSE

if (condition){

} else {

}

-----------------or if there are more checks

if (condition){

} else if (condition) {

} else {

}


---------------------note that you do NOT need to have else if you don't want to have a default execution


***Syntax Switch

switch (variable){
  case (value):
    //if variable === value run this case
  break;
  case (value2):
    // if variable === value2 run this case
  break;

  default:
    //otherwise run this case
  break;
}

---------------------note that you do NOT need to have default to run a switch statement


***Syntax Ternary

let myVariable = condition ? value1 : value2; //if condition, myVariable = value1, else myVariable = value2

---------------------note using a ternary statement does REQUIRE you to have a else statement.


Below is a function that lets us ask for an input from the user
---------------------------------------------------------
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Who are you?', name => {
  console.log(`Hey there ${name}!`);
  readline.close();
});
*/