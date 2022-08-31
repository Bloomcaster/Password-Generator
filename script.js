// Assignment Code
var generateBtn = document.querySelector("#generate");

//parameters for choices for the password lowercase, uppercase, numerical and special characters
let lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numericalChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "+"];
let masterArray =[];
let randomPassword ="";

// Write password to the #password input
function writePassword() {
 var password = generatePassword(""); 
 var passwordLength = prompt("How many characters would you like for your password? Must be between 8 and 128 characters");
 passwordLength = parseInt(passwordLength);
 if (passwordLength <8) {
 alert("Must use more than 7 characters!");
 return"";
}

if (passwordLength >128) {
  alert("Must use no more than 128 characters!");
  return"";
}
}
//section creates prompts for the user to select lowercase, uppercase, numerical and special characters for their password
let useLowercaseChar = confirm("Want to use some lowercase characters?");
if (lowercaseChar ===true) {
  masterArray += lowercaseChar;
}
let useUppercaseChar = confirm("Want to use some uppercase characters?");
if (uppercaseChar ===true) {
 masterArray += uppercaseChar;
}
let useNumericalChar = confirm("Want to use some numerical characters?");
if (numericalChar ===true) {
 masterArray += numericalChar;
}
let useSpecialChar = confirm("Want to use some special characters?");
if (specialChar ===true) {
 masterArray += specialChar;
}

for (let i = 0; i <passwordLength; i++) {
  randomPassword +=masterArray[Math.floor(Math.random()*(masterArray.length))];
  console.log(Math.floor(Math.random()* (masterArray.length)));
  console.log(randomPassword);
}

  var passwordText = document.querySelector("#password");








  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
