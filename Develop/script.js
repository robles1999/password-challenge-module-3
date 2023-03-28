"use strict";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let newPassword = "";

  // !::::::::::: USER PROMPTS :::::::::::::
  let pwLength;

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

  const specialChar = confirm(
    "Click OK to confirm including special characters."
  );
  const numChar = confirm("Click OK to confirm including numeric characters.");
  const lowerChar = confirm("Click OK to confirm including lower characters.");
  const upperChar = confirm("Click OK to confirm including upper characters.");

  if (!specialChar && !numChar && !lowerChar && !upperChar) {
    alert("You must select at least one character type.");
    writePassword();
  }

  // !::::::: IF USER WANTS SPECIAL CHAR AND NUMBERS ::::::
  const charsOnly = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const spChar = "!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?";
  let characters = "";

  if (specialChar || numChar) {
    if (specialChar && numChar) {
      for (let i = 0; i < pwLength; i++) {
        console.log(specialChar, numChar, upperChar, lowerChar);
        characters = charsOnly + numbers + spChar;
        // get a random character
        const char = characters[Math.floor(Math.random() * characters.length)];
        newPassword += checkUpperLower(char, lowerChar, upperChar);
      }
    } else if (specialChar) {
      for (let i = 0; i < pwLength; i++) {
        // special characters only
        if (!upperChar && !lowerChar) {
          characters = spChar;
          const char =
            characters[Math.floor(Math.random() * characters.length)];
          newPassword += char;
        } else {
          // special characters and letters
          characters = charsOnly + spChar;
          const char =
            characters[Math.floor(Math.random() * characters.length)];
          // check lower upper
          newPassword += checkUpperLower(char, lowerChar, upperChar);
        }
      }
    } else if (numChar) {
      // only numbers
      if (!upperChar && !lowerChar) {
        for (let i = 0; i < pwLength; i++) {
          console.log("made upper lower if of numbChar");
          characters = numbers;
          const char =
            characters[Math.floor(Math.random() * characters.length)];
          newPassword += char;
        }
      } else {
        // numbers and letters
        characters = charsOnly + numbers;
        for (let i = 0; i < pwLength; i++) {
          const char =
            characters[Math.floor(Math.random() * characters.length)];
          // check lower upper
          newPassword += checkUpperLower(char, lowerChar, upperChar);
        }
      }
    }
    // !::::::: IF USER DON'T WANT SPECIAL CHAR AND NUMBERS ::::::
  } else if (upperChar || lowerChar) {
    for (let i = 0; i < pwLength; i++) {
      const char = charsOnly[Math.floor(Math.random() * charsOnly.length)];
      // check lower upper
      newPassword += checkUpperLower(char, lowerChar, upperChar);
    }
  }
  return newPassword;
}

function checkUpperLower(char, lower, upper) {
  if (lower && upper) {
    return char;
  } else if (upper) {
    return char.toUpperCase();
  } else {
    return char.toLowerCase();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);