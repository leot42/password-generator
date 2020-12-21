// Assignment code here
// @ts-check
// Setup code
// Use as an object to store user choices.
let userChoiceData = {
  passwordLength: 999,
  charTypeUppercase: false,
  charTypeLowercase: false,
  charTypeNumbers: false,
  charTypeSymbols: false
}

// Inclusive Random Number Generator
/**
 * @summary Return a random number that is equal to or between the two given parameters.
 * @param {number} lowestNumberReturnable Lowest number that can be generated.
 * @param {number} highestNumberReturnable Highest number that can be generated.
 * @returns {number} A number that is at most equal to the parameter highestNumberReturnable but no less than lowestNumberReturnable parameter.
 */
function getRandomIntInclusive(lowestNumberReturnable, highestNumberReturnable) {
  let min = Math.ceil(lowestNumberReturnable);
  let max = Math.floor(highestNumberReturnable);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

/**
 *  Container for ASCII character ranges
 */
class CharRange {
  /**@type {number} */
  #lowerCharRange;

  /**@type {number} */
  #upperCharRange;

/**
 * 
  * @param {number} lowerCharRange Lowest ASCII character encoded number.
 * @param {number} upperCharRange Highest ASCII character encoded number.
 */
  constructor(lowerCharRange, upperCharRange) {
    this.lowerCharRange = lowerCharRange;
    this.upperCharRange = upperCharRange;
  }
/**
 * Returns the lowest ASCII character encoded number.
 * @return {number}
 */
  get getLowerCharRange() {return this.#lowerCharRange;}

  /**
 * Returns the highest ASCII character encoded number.
 * @return {number}
 */
  get getUpperCharRange() {return this.#upperCharRange;}
}

/**
 * Container to define the character types
 */
class CharType {
  /**@type {CharRange[]} */
  #charRangeArray = [];
  
  /**
   * Takes an array CharRange
   * @param {CharRange[]} charRangeArray
   */
  constructor(charRangeArray) {
    
    this.#charRangeArray = charRangeArray;
    //todo delete below if still constructing with an array as a param
    // charRangeArray.forEach(element => {
    //   this.#charRangeArray.push(element);
    // });
    
  }

#isCharRange = (unValidatedObj) => {
  if (unValidatedObj instanceof CharRange) { return true}
}
  

  set addCharRange(charRangeToAdd) {
    if(this.#isCharRange(charRangeToAdd)) {
      this.#charRangeArray.push();}
      else if (charRangeToAdd )
      {

      }
    
  }

  /**@returns char */
  get getCharRangeArrayContents () {

    // If there is more than one array of charRange objects randomly choose one.
    if (this.#charRangeArray.length > 1) {
      // Get a random number that does not exceed the number of elements
      let randomIndexToUse = getRandomIntInclusive(0, this.#charRangeArray.length - 1);
      return this.#charRangeArray[randomIndexToUse];
    }
    return this.#charRangeArray[0];
  }

}

// Random character generator
/**
 * 
 * @param {CharRange} charRange 
 */
function generateRandomChar(charRange) {
  return String.fromCharCode(getRandomIntInclusive(charRange.lowerCharRange, charRange.upperCharRange));
};

// Define ASCII character ranges by types listed in the  ASCII table.
let upperCaseCharRange = [new CharRange(65, 90)];
let lowerCaseCharRange = [new CharRange(97, 122)];
let numbersCharRange = [new CharRange(48, 57)];
let symbolsCharRange = [new CharRange(91, 96), new CharRange(123, 126), new CharRange(58, 63), new CharRange(33, 47)];

// Instantiate CharType classes based the the actual types of characters.
// Since some of the types are scattered across the table in a nonlinear manner it is necessary to group them in classes.
let upperCaseCharType = new CharType(upperCaseCharRange);
let lowerCaseCharType = new CharType(lowerCaseCharRange);
let numbersCharType = new CharType(numbersCharRange);
let symbolsCharType = new CharType(symbolsCharRange);

// Dialog View //#region

/** Controller  */
class Controller {
  /**@type {ViewPage} The default viewPage to start. */
  #defaultPage;

  /**PageData */
  #pageData;
}
/**@summary The logic that define the ui of a page of dialog */
class ViewPage {
  /**@description Used as the first line in the page of dialog.
  *@type {string} */ header
  /**@description The descriptive content of the page.
  *@type {string} */ dialogParagraph;
  dataModel;

  constructor(header, dialogParagraph, model) {
    this.header = header;
    this. dialogParagraph = dialogParagraph;
    this.dataModel = model;

  }
}

/**Defines the encapsulating window for views, there controlling logic and the models of data they operate upon. */

class ViewWindow {
  /**@type {ViewPage}*/
  #viewPage;
  constructor(viewPage) {
    this.viewPage = viewPage
  }

  /**Sets the current view page */
 // set setViewPage

  /**@returns {ViewPage} Gets the current view page. */
  get getViewPage() {
    return this.#viewPage;
  }
}


/**@type {string} */

// view dialog content
let passwordPageHeader = "Choose password length."
let dialogParagraph = "Input a number between 8 and 128";
let passwordLengthPageModel = {"passwordLength":"99"};

let passwordCharTypePageModel = {"isUpperCase":false, "isLowerCase": false, "isNumber": false, "isSpecialChar": false};

//

// Display it and grab the result.
function getPasswordLength() {
// Create a password length page, display it and grab the result.
  let decidePasswordLength = new ViewPage(passwordPageHeader, dialogParagraph, passwordLengthPageModel);

  // Display the password page and return the result.
  decidePasswordLength.dataModel.passwordLength = prompt(`${passwordPageHeader}\n ${dialogParagraph}\n`);
}
//Confirm that the choice was correct.
// prompt(decidePasswordLength.dataModel.passwordLength);
//
let message = "message";
let viewDialog = "test prompt 2";
let testUserResponse = ""
testUserResponse = prompt(viewDialog);
alert(testUserResponse);

// //#endregion

// END OF SETUP
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function generatePassword() {

  return generateRandomChar(symbolsCharType.getCharRangeArrayContents);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // @ts-ignore
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
