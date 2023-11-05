// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  let result = "";
  const letterOptions = "abcdefghijklmnopqrstuvwxyz";
  letterOptions.split("");
  const specialOptions = "~`!@#$%^&*()_-+={[}]|;'<,>.?/";
  specialOptions.split("");

  var passwordLength = window.prompt(
    "How many characters would you like your password to be? Minimum: 8 Maximum: 125"
  );

  if (passwordLength < 8 || passwordLength > 125) {
    return;
  }

  var lowerChar = window.confirm("Would you like lowercase letters?");
  var specialChar = window.confirm("Would you like special characters?");
  var upperChar = window.confirm("Would you like uppercase letters?");
  var numberChar = window.confirm("Would you like to have numbers?");
  
  if (!lowerChar && !specialChar && !upperChar && !numberChar) {
    return;
  }

  for (i = 0; i < passwordLength; i++) {
    var letterIndex = Math.floor(Math.random() * letterOptions.length);
    var lowerCaseChoice = letterOptions[letterIndex];

    var upperCaseChoice = lowerCaseChoice.toUpperCase();

    var specialIndex = Math.floor(Math.random() * specialOptions.length);
    var specialChoice = specialOptions[specialIndex];

    var numberChoice = Math.floor(Math.random() * 10);

    var generator = [];

    if (lowerChar) {
      generator.push(lowerCaseChoice);
    }

    if (upperChar) {
      generator.push(upperCaseChoice);
    }

    if (numberChar) {
      generator.push(numberChoice);
    }

    if (specialChar) {
      generator.push(specialChoice);
    }

    let resultIndex = Math.floor(Math.random() * generator.length);
    result += generator[resultIndex];
  }
  var password = result;

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password.length);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
