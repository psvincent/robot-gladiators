// Game States
// "WIN" - Player robot has defeated all enemy robots
// * Fight all enemy-robots
// * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// Play again and Shop features
// Wrap the game  logic in a startGame() function.
// When the player is defeated or there are no more enemies, call an endGame() function that alerts the player's total stats, asks the player if they want to play again, and if yes call startGame() to restart the game.
// After the player skips or defeats an enemy (and there are still more robots to fight) then Ask the player if they want to "shop", If no continue as normal, If yes call the shop() function, In the shop() function, ask player if they want to "refill" health "upgrade" attack or "leave" the shop, If refill subtract money points from player and increase health, If upgrade subtract money points from player and increase attack power, If leave alert goodbye and exit the function, If any other invalid option call shop() again.
 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 20;

// You can also log multiple values at once like this
// This displays the playerName that the player enters, how much damage the player does, and the health in the console.
// console.log(playerName, playerAttack, playerHealth);

// The enemy Names are an array since there are multiple enemies.
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// This displays how many elements are in the array as well as the whole array of the enemies and lists them all seperately the first one starting with 0.
// console.log(enemyNames);
// This for loop prints the enemy names in the console as well as the number it is in the array.  It also prints the enemy's name then "is at" then the number it is in the array then "index".
// for (var i = 0; i < enemyNames.length; i++) {
// console.log(enemyNames[i]);
// console.log(i)
// console.log(enemyNames[i] + " is at " + i + " index");
// }
var enemyHealth = 50;
var enemyAttack = 12;

// This function generates a random numeric value between min and max and returns the variable value which is between min and max. This allows the variable randomNumber to have different values throughout the file.
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
}

var fight = function(enemyName) {
  // This is a while loop which is telling the fight function to execute as long as the enemy robot and the player robot is still alive.  The && operator means that both conditions must be true.  This differs from the || operator which means either operator could be true.
  while(playerHealth > 0 && enemyHealth > 0) {
  // This prompt asks the player if they want to fight or skip ther battle
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  // If player picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // If yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + ' has decided to skip this fight. Goodbye!');
      // Subtract money from playerMoney for skipping.  The Math.max is to make sure the value of the player's money doesn't go below 0.  Could also use an if statement like if (playerMoney < 0) { playerMoney = 0;}
      playerMoney = Math.max(0, playerMoney - 2);
      console.log("playerMoney", playerMoney);
      break;
    }
  }
  // If player chooses to fight, then fight.
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // This generates a random damage value based on the player's attack power.
    var damage = randomNumber(playerAttack - 3, playerAttack);
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable.  The Math.max is to make sure the enemy health stays at 0 even if it goes below.
  enemyHealth = Math.max(0, enemyHealth - damage);
  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );
  // Check enemy's health
  if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      // award player money for winning
      playerMoney = playerMoney + 20;
      // This break prevents the enemy robot to still do damage after being defeated
      break;
  }
  else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
  // This generates a random damage value based on the enemy's attack power.
  var damage = randomNumber(enemyAttack - 3, enemyAttack);
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.  The Math.max is to make sure the playerHealth stays at 0 even if it goes below.
  playerHealth = Math.max(0, playerHealth - damage);
  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );
  // Check player's health
  if (playerHealth <= 0) {
      window.alert(playerName + " has died.. GAME OVER");
      break;
  } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
}
}
}
};

// Function to start a new game
var startGame = function() {
  // This resets the player's stats after every game played.
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
for(var i = 0; i < enemyNames.length; i++) {
  // This if statement says if the players health is still above 0, then continue the fight.  The i + 1 shows the round you are on. since i initially is 0 due to the arrays first element being 0, then if you add one to it, the round counter will start at one.
  if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  } else {
    window.alert("You have lost your robot in battle! Game Over");
    break;
  }
  var pickedEnemyName = enemyNames[i];
  // This enemyHealth = randomNumber makes sure that whenever a new enemy appears it's health is at a number between 40 and 60.
  enemyHealth = randomNumber(40, 60);
  // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter.
  fight(pickedEnemyName);
  // If you are not at the last enemy in the array  and the player is still alive you will get the option to open the shop.  This will ensure that shop() is called after every fight but only if the loop iterator, i, still has room to increment.
  if (playerHealth > 0 && i < enemyNames.length - 1) {
    // Ask the player if they want to use the shop before their next round.
    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
    // If yes, take them to the store() function
    if (storeConfirm) {
    shop();
    }
  }
}
// after the loop ends, player is either out of health or enemies to fight, so run the endGame function.
endGame();
};

// This function ends the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");
// This says if the player is still alive, the player wins.
if (playerHealth > 0) {
  window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
} else {
  window.alert("You've lost your robot in battle.");
}
// This asks the player if they want to play again.
var playAgainConfirm = window.confirm("Would you like to play again?");
if (playAgainConfirm) {
  // restart the game
  startGame();
} else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
};

var shop = function() {
  // Ask the player what they would like to do.
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
  // Logic behind what the player chooses whether it be refill, upgrade, or leave using switch instead of if.
  switch (shopOptionPrompt) {
    // If they choose refill show alert to refill health by 20 for 7 dollars.
    case "refill":
    case "REFILL":
      // Check if player has enough money.
      if (playerMoney >= 7 ) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      // Increase player health by 20 and decrease playerMoney by 7.
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }
      break;
      // If they choose upgrade, upgrade player's attack by 6 for 7 dollars.
      case "upgrade":
      case "UPGRADE": 
      if (playerMoney >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      // Increase player attack by 6 and decrease player money by 7.
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }
      break;
      case "leave":
      case "LEAVE":
        window.alert("Leaving the store.");
        // Do nothing so function will end.
        break;
        // default is when the player chooses an invalid option so anything by refill, upgrade, or leave.
        default: 
        window.alert("You did not pick a valid option. Try again.");
        // Call skop again to force player to pick a valid option.
        shop();
        break;
  }
};

// This starts the gamer initially but does not restart it if the player wants to play again.
startGame();


































// The built-in object called math is like prompt() and alert() so it is a property of the window object but you do not need to write window.Math.
// The Math object has many properties and functions attached to it.  When a function belongs to an object, we refer to it as a method.
// console.log(Math.PI);
// Prints 3.141592653589793

// console.log(Math.round(4.4));
// Rounds to the nearest whole number (4)

// console.log(Math.sqrt(25));
// Prints the square root of 25 so 5.

// console.log(Math.max(10, 20, 100));
// Prints 100 since it is the largest number out of 10, 20, and 100.

// console.log(Math.max(0, -50));
// Prints 0 since 0 is larger than -50.

// The Math.random() method returns a random decimal number between 0 and 1 but not including 1. For this decimal to be useful, we have to pair it with other math operations like Math.floor.


// Basic example of a switch statement (An alternative to if statements).  Use switch tatements when checking a single value against multiple possibilities, or cases. In this example, we're defining what should happen when the variable num equals 1, 2, 3, or something else (the default case). Each case ends with a break to specify that nothing more should happen. In the previous example, "the variable was something else" will print because num was 5. 
// var num = 5;

// switch(num) {
//   case 1:
//     console.log("the variable was 1");
//     break;
//   case 2:
//     console.log("the variable was 2");
//     break;
//   case 3:
//     console.log("the variable was 3");
//     break;
//   default:
//     console.log("the variable was something else");
//     break;
// }


// Difference between function declaration (Calling a function without giving it a variable keyword) and function expression (Calling a function with a variable keyword).

// Function Declaration
// add(5,6);  // This will log 11
// function add(a,b) {
// console.log(a+b);
// }

// Function Expression
// add (5,6);  // Gives you an error 
// var add = function(a,b) {
// console.log(a+b);
// }

// var a is a global variable and variable b is a local variable inside the function logStuff.
// var a = "a";

// var logStuff = function() {
// var b = "b";
// console.log(a);
// console.log(b);
// };

// console.log(a);
// console.log(b); // error


// The stuff inside the parentheses is called an argument.
// console.log(enemyNames);                              array argument
// alert("Hello");                                       string argument
// console.log(enemyNames[i], i);                        two arguments, comma-separated
// for(var i = 0; i < enemyNames.length; i++) {
// fight(enemyNames[i]);                                 This puts an argument inside a function which is basically saying run this function until i gets to the end of the enemyNames length.
// }


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