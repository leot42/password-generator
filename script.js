// Assignment code here

// Setup code

// Inclusive Random Number Generator
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// Container for ASCII character ranges
class CharRange {
  constructor(lowerCharRange, upperCharRange) {
    this.lowerCharRange = lowerCharRange;
    this.upperCharRange = upperCharRange;
  }
}

// Container to define the character types
class CharType {
  #charRangeArray;
  
  constructor(charRange) {
    //  Holds arrays of charRanges
    this.charRangeArray = [];
    this.charRangeArray.push(charRange);
  }

  set addCharRange(charRangeToAdd) {
    this.charRangeArray.push();
  }

  get getCharRangeArrayContents () {

    // If there is more than one array of charRange objects randomly choose one.
    if (this.charRangeArray.length > 1) {
      getRandomIntInclusive()
    }
    return this.charRangeArray;
  }

}

// Random character generator
function returnRandomChar(CharType) {
  return String.fromCharCode(getRandomIntInclusive(CharType.getCharRangeArrayContents[0].lowerCharRange, CharType.getCharRangeArrayContents[0].upperCharRange));
};

// Define ASCII character ranges by types listed in the  ASCII table.
upperCaseCharRange = new CharRange(65, 90);
lowerCaseCharRange = new CharRange(97, 122);
numbersCharRange = new CharRange(48, 57);
symbols1CaseCharRange = new CharRange(91, 96);
symbols2CaseCharRange = new CharRange(123, 126);
symbols3CaseCharRange = new CharRange(58, 63);
symbols4CaseCharRange = new CharRange(33, 47);

// Instantiate CharType classes based the the actual types of characters.
// Since some of the types are scattered across the table in a nonlinear manner it is necessary to group them in classes.
upperCaseCharType = new CharType(upperCaseCharRange);
lowerCaseCharType = new CharType(lowerCaseCharRange);
numbersCharType = new CharType(numbersCharRange);
symbolsCharType = new CharType(upperCaseCharRange);
symbolsCharType.addCharRange = symbols3CaseCharRange;
symbolsCharType.addCharRange = symbols4CaseCharRange;



// END OF SETUP
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// create an uppercase charRange



function generatePassword() {
  return returnRandomChar(lowerCaseCharType);
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
