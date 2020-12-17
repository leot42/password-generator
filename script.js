// Assignment code here
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
  function returnRandomChar(firstCharInRange, lastCharInRange){
    return String.fromCharCode(getRandomIntInclusive(firstCharInRange, lastCharInRange));
  };
function generatePassword() {
   return returnRandomChar(33, 47);
}
// console.log(getRandomInt(65, 90)); 

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
