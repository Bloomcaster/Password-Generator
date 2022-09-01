// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {

  var charChoice = "";
//parameters for choices for the password lowercase, uppercase, numerical and special characters
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var numericalChar = "0123456789";
var specialChar = "!~+_$";


//letting user know the parameters for how many characters to use for the password
var userCharAmount = window.prompt ("How many characters woudl you like for your password? Must be between 8 and 128 characters in length.")

//parsing together the string that character number 
var charNumber = parseInt(userCharAmount)

if (typeInLettersEtc(userCharAmount)){
  window.alert("Enter a proper number between 8 and 128.")
}

if (charNumber<8 || charNumber >128){
  window.alert("Enter proper number between 8 and 128.")
}




var useLowercaseChar = window.confirm("Want to use some lowercase characters?");
var useUppercaseChar = window.confirm("Want to use some uppercase characters?");
var useNumericalChar = window.confirm("Want to use some numerical characters?");
var useSpecialChar = window.confirm("Want to use some special characters?");
}


//setting up the character requirements so that they must choose at least one of types of characters
if ( 
  useLowercaseChar === false &&
  useUppercaseChar === false &&
  useNumericalChar === false &&
  useSpecialChar === false
) {
  window.alert("Must select at least on of the character types offered.")
}

if (useLowercaseChar) {
  charChoice +=
  lowercaseChar
}

if (useUppercaseChar) {
  charChoice +=
uppercaseChar
}
if (useNumericalChar) {
 charChoice +=
  numericalChar
}
if (useSpecialChar){
 charChoice +=
  specialChar
}

var password = ""


//says password length not defined on page, need to work on this!! line 45, just added those numbers, red error left page but doesnt work (maybe fixed!!)
for (var i = 0; i <charNumber; i++) {
  password += charChoice(Math.floor(Math.random()*(charChoice)));
} 





// Write password to the #password input
function writePassword() {

var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
