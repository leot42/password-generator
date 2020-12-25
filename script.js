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


/**@summary Valdate that an input is a number.
 * @param {string} numberToCheck Text recieved from the prompt given by the user.
 * @returns {boolean} numberToCheck confirmed to be a number.
 */
function isValidNumber(numberToCheck) {
  let parsedUserOutput = parseInt(numberToCheck);
  if(parsedUserOutput === NaN){ 
    console.log(`Error: userPromptOutput: ${numberToCheck} was not a number.`); 
  }
  return true;
}

/**Structure of the page text. */
class PageStructure {
  #userAnswer;
  constructor(titleText, choiceText, invalidAnswerText, exampleAnswerText, displayAnswerTextBox) {
    this.titleText = titleText + "\n\n";
    this.choiceText = choiceText + "\n";
    this.invalidAnswerText = invalidAnswerText + "\n";
    this.exampleAnswerText = exampleAnswerText + "\n";
    this.displayAnswerTextBox = displayAnswerTextBox;
  }
//Returns validated and confirmed answer from the User
  getAnswer() {
    //Ask question
    let unValidatedUserAnswer = this.askQuestion();
    // check to see if answer is a number.

    // check to see if answer is an acceptable answer.

    //check to see if answer is an acceptable option.

 
  }

  askQuestion() {
    // Ask the user the question
     this.#userAnswer = prompt(this.getFullPageText);
     // validate that userAnswer is a number and an acceptable answer for the question asked.
      /* while (userAnswer == NaN) {
        // display not an acceptable
            alert(`Is __"${this.#userAnswer}"__ the choice you intended? \n For Yes Enter_1_ \nFor No Enter _2_`);
      }
      */
     //if answer is valid confirm that this was what the user intended to ask for.
    prompt(`Is __"${this.#userAnswer}"__ the choice you intended? \n    For Yes Enter_1_ \n    For No Enter _2_`);
  }

  verifyAnswerWasIntended() {
    let intendedAnswer = prompt(`Is __"${this.#userAnswer}"__ the choice you intended? \n For Yes Enter_1_ \nFor No Enter _2_`);
    let intendedAnswerCheck = validateUserOutput(intendedAnswer);

    if (intendedAnswerCheck === 1) {
      // put answer in user choice data
      /* move to next page or maybe just return and have the out side scope move to the next question */}
    else {}
  }
  
  get getFullPageText() {
    return this.titleText + this.choiceText + this.exampleAnswerText;
  }
}
// Page content instances
let passwordLengthQuestionPage = new PageStructure(
  "Choose Password Length\n",
  "Password length can from 8 to 128 characters long.\n",
  "I sorry that was an invalid answer.\n",
  "Example 8 or 99 or 128\n",
  ""
) 

/**@summary Valdate user input
 * @param {string} userPromptOutput Text recieved from the prompt given by the user.
 * @returns {number | NaN} User output confirmed to be a number.
 */
function validateUserOutput(userPromptOutput) {
    let parsedUserOutput = parseInt(userPromptOutput);
    if(parsedUserOutput === NaN){ 
      console.log(`Error: userPromptOutput:${userPromptOutput} was not a number.`); 
    }
    return parsedUserOutput;
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

// //#endregion

// END OF SETUP
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// call question page that returns a valid answer
function generatePassword() {
//Get password length
passwordLengthQuestionPage.askQuestion(); // maybe should be named .getAnswer() method

//Choose chars types
/**@todo */ //chooseCharTypesPage.askQuestion();

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
