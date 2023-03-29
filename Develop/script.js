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
      askPwLength();
    }
    return;
  }

  // How many characters would you like your password to contain? ✅
  pwLength = askPwLength();

  const charTypes = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()-=+[]{}\\|;:'\",.<>/?",
  };

  for (let type in charTypes) {
    if (confirm(`Click OK to confirm including ${type} characters.`)) {
      string += charTypes[type];
      types[type] = true;
    }
  }
  // Object.keys returns the object keys if there
  // check if at least one character type is selected
  if (Object.keys(types).length === 0) {
    alert("Please select at least one character type.");
    generatePassword();
    return;
  }

  // !::::::::::: GENERATE PASSWORD :::::::::::::
  for (let i = 0; i < pwLength; i++) {
    newPassword += string.charAt(Math.floor(Math.random() * string.length));
  }

  // check if the password includes the required character types
  if (
    types.lower &&
    !/[a-z]/.test(newPassword) &&
    /[A-Z]/.test(newPassword) &&
    /\d/.test(newPassword) &&
    /[\W_]/.test(newPassword)
  ) {
    newPassword =
      newPassword.slice(0, 1) + "a" + newPassword.slice(1, pwLength - 3);
  }

  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
