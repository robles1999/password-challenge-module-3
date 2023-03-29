"use strict";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate a password with specified criteria
function generatePassword() {
  let newPassword = "";

  // !::::::::::: USER PROMPTS :::::::::::::
  let pwLength;
  let string = "";
  let types = {};

  // How many characters would you like your password to contain?
  askPwLength();

  function askPwLength() {
    let length = prompt(
      "How many characters would you like your password to contain?"
    );
    // check if the length is between 8 - 128
    checkLength(length);
    return length;
  }

  //? check min and max length
  function checkLength(length) {
    if (length < 8 || length > 128) {
      alert(`Password length must be between 8 and 128 characters long.`);
      pwLength = askPwLength();
    } else {
      pwLength = length;
    }
  }

  const charTypes = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()-=+[]{}\\|;:'\",.<>/?",
  };

  // loop through each item in the charTypes and use
  // the object keys to prompt the user
  for (let type in charTypes) {
    if (confirm(`Click OK to confirm including ${type} characters.`)) {
      string += charTypes[type];
      types[type] = true;
    }
  }
  // Object.keys returns the object which we can then check the length of
  // check if at least one character type is selected
  if (Object.keys(types).length === 0) {
    alert("Please select at least one character type.");
    return generatePassword();
  }

  // !::::::::::: GENERATE PASSWORD :::::::::::::
  for (let i = 0; i < pwLength; i++) {
    newPassword += string.charAt(Math.floor(Math.random() * string.length));
  }

  // check if the password includes the required character types
  if (
    // the `not` operator will flip a falsy result into
    // a truthy result, so that both conditions are true if the
    // generated pw doesn't contain at least one character of the
    // selected type. This will then make the entire expression
    // true and the password will be re-generated until the
    // pw contain at least one char of the selected types.
    (types.numeric && !/[0-9]/.test(newPassword)) ||
    (types.lower && !/[a-z]/.test(newPassword)) ||
    (types.upper && !/[A-Z]/.test(newPassword)) ||
    (types.special && !/[\W_]/.test(newPassword))
  ) {
    return generatePassword();
  }

  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
