// Assignment code here
function generatePassword(){
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characters = " !%'()*+,-./:;<=>?@[\^_`{|}~";

  function popup() {
    var popwindow = document.getElementById("checkBundle");
    if (popwindow.style.display === "none") {
        popwindow.style.display = "block";
   } else {
         popwindow.style.display = "none";
     }
  };
  
  var passLength = window.prompt("How long would you like the passcode to be? (Must be between 8 and 128 characters.): ")



}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
