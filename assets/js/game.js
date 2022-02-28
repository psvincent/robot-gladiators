var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  // Alerts the player that they are starting the round.
  window.alert("Welcome to Robot Gladiators!");
  // This prompt asks the player if they want to fight or skip ther battle
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  // If player chooses to fight, then fight.
  if (promptFight === "fight" || promptFight === "FIGHT") {
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );
  // Check enemy's health
  if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
  }
  else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );
  // Check player's health
  if (playerHealth <= 0) {
      window.alert(playerName + " has died");
  } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // If player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  // Confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  // If yes (true), leave fight.
  if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
  // subtract money from playerMoney for skipping
  playerMoney = playerMoney - 2;    
  }
  // If no (false), ask question again by running fight() again.
  else {
      fight();
  }
    window.alert(playerName + " has chosen to skip the fight!");
} else {
    window.alert("You need to choose a valid option. Try again!");
}
};

fight();


















// These are two ways you can make a function

// create function
// function fight() {
    // window.alert("Welcome to Robot Gladiators!");
  // }
  // execute function
  // fight();

  // create function
// var fight = function() {
    // window.alert("Welcome to Robot Gladiators!");
  // };
  // execute function
  // fight();




// All this is the initial trial code to get used to JavaScript 




// The window.prompt is asking the player what they want their robot's name to be with a textbox.
// The var playerName allows you to hold the information the user enters on this window.prompt no matter what they enter so whatever the user enters will be stored in the variable playerName.
// The variable isn't assigned the prompt function but rather is assigned the value that returns from the function.

// var playerName = window.prompt("What is your robot's name?");

// window.alert(playername); shows what your robots name is after you enter it.
// window.alert(playerName);  // Note the lack of quotation marks around playerName.

// console.log(playerName);  // This doesn't show on the actual page but it does show in the console when you right click then hit inspect you should go to console and the name you entered when prompted with what is your robot's name should appear in the console.

// console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
// console.log(10 + 10);
// what is this?
// console.log("Our robot's name is " + playerName);

// This creates a function named 'fight'

// function fight() {
  //  window.alert('The fight has begun!');
// }

// This is calling the function 'fight'
// fight();









//Examples of types of variables

// This is a String data type; it must be wrapped in double quotes (" ") or single quotes (' ').
// var stringDataType = "This is a string, which is a fancy way to say text";

// This is a Number data type; it can be an integer (whole number) or have decimals (floated numbers).
// var numberIntegerDataType = 10;
// var numberFloatDataType = 10.4;

// This is a Boolean data type, which can only be given a value of true or false.
// var booleanDataType = true;


// Examples of ways you can use console.log

// console.log("This logs a string, good for leaving yourself a message");

// this will do math and log 20
// console.log(10 + 10);

// We wanted to take the name of our robot and place it into a sentence that would read, "Our robot's name is ." To do this, we needed to combine a string with a variable. This is called string concatenation. In string concatenation, we can write out a string as we typically would, but in order to include variable data, we need to close the string. To do that, put a plus sign + after the closing quotation, then write the variable name.
// console.log("Our robot's name is " + playerName);


// More Examples of console.log using the var playerName.

// var playerName = "Tony the Robot";

// Tony the Robot is ready for battle!
// console.log("Tony the Robot" + " is ready for battle!");

// "Tony the Robot is ready for battle!"
// console.log(playerName + " is ready for battle!");

// "Your robot, Tony the Robot, has won!
// console.log("Your robot, " + playerName + ", has won!");

// Remember that you can also use console the console in ChromeDevTools to type and test simple JavaScript.