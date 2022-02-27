// The window.prompt is asking the player what they want their robot's name to be with a textbox.
// The var playerName allows you to hold the information the user enters on this window.prompt no matter what they enter so whatever the user enters will be stored in the variable playerName.
// The variable isn't assigned the prompt function but rather is assigned the value that returns from the function.

var playerName = window.prompt("What is your robot's name?");

// window.alert(playername); shows what your robots name is after you enter it.
// window.alert(playerName);  // Note the lack of quotation marks around playerName.

console.log(playerName);  // This doesn't show on the actual page but it does show in the console when you right click then hit inspect you should go to console and the name you entered when prompted with what is your robot's name should appear in the console.

console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// what is this?
console.log("Our robot's name is " + playerName);

// This creates a function named 'fight'

function fight() {
    window.alert('The fight has begun!');
}

// This is calling the function 'fight'
// fight();











// This is a String data type; it must be wrapped in double quotes (" ") or single quotes (' ').
// var stringDataType = "This is a string, which is a fancy way to say text";

// This is a Number data type; it can be an integer (whole number) or have decimals (floated numbers).
// var numberIntegerDataType = 10;
// var numberFloatDataType = 10.4;

// This is a Boolean data type, which can only be given a value of true or false.
// var booleanDataType = true;