// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = window.prompt(
  "How many characters would you like your password to be?"
);
var lowerChar = window.confirm("Would you like lowercase letters?");
var upperChar = window.confirm("Would you like uppercase letters?");
var numberChar = window.confirm("Would you like to have numbers?")
var specialChar = window.confirm("Would you like special characters?");

// Write password to the #password input
function writePassword() {
  let result = ''
  var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialOptions = ["!", "@", "#", "$","%","^","&","*","(",")","_","+","-","=","{","}","[","]",";",":","'","<",">",",",".","/","?",'"',];
for (i = 0; i < passwordLength; i++) {
  var letterIndex = Math.floor(Math.random() * letterOptions.length)
  var lowerCaseChoice = letterOptions[letterIndex];

  var upperCaseChoice = lowerCaseChoice.toUpperCase();

  var specialIndex = Math.floor(Math.random() * specialOptions.length);
  var specialChoice = specialOptions[specialIndex];

  var numberChoice = Math.floor(Math.random() * 10);

    var generator = [];

if (lowerChar) {
    generator.push(lowerCaseChoice)
}

if (upperChar) {
    generator.push(upperCaseChoice)
}

if (numberChar) {
  generator.push(numberChoice)
}

if (specialChar) {
  generator.push(specialChoice)
}


  
    let resultIndex = Math.floor(Math.random() * generator.length)
    result += generator[resultIndex]
  }
  var password = result
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password.length)
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
