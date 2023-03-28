// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  const passwordCharsAll =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?";

  const charsUpperLower =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charsUpperOnly = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charsLowerOnly = "abcdefghijklmnopqrstuvwxyz";

  const noNumbers =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?";

  const noSpecialChar =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let newPassword = "";

  // How many characters would you like your password to contain? ✅
  let pwLength = prompt(
    "How many characters would you like your password to contain?"
  );

  // Min length of character need to be >= 8 characters. ✅
  if (pwLength < 8 || pwLength > 128) {
    pwLength = prompt(
      `Password length must be between 8 and 128 characters long.`
    );
  }

// !::::::::::: USER PROMPTS :::::::::::::
  
  const specialChar = confirm(
    "Click OK to confirm including special characters."
  );
  const numChar = confirm("Click OK to confirm including numeric characters.");
  const lowerChar = confirm("Click OK to confirm including lower characters.");
  const upperChar = confirm("Click OK to confirm including upper characters.");
  
  // !::::::: IF USER WANTS SPECIAL CHAR AND NUMBERS ::::::

  if (specialChar || numChar) {
    if (specialChar && numChar) {
      for (let i = 0; i < pwLength; i++) {
        // get a random character
        const char =
          passwordCharsAll[Math.floor(Math.random() * passwordCharsAll.length)];
        // 
        if (lowerChar && upperChar) {
          newPassword += char;
        } else if (upperChar) {
          newPassword += char.toUpperCase();
        } else {
          newPassword += char.toLowerCase();
        }
      }
    } else if (specialChar) {
      for (let i = 0; i < pwLength; i++) {
        const char = noNumbers[Math.floor(Math.random() * noNumbers.length)];
        if (lowerChar && upperChar) {
          newPassword += char;
        } else if (upperChar) {
          newPassword += char.toUpperCase();
        } else {
          newPassword += char.toLowerCase();
        }
      }
    } else if (numChar) {
      for (let i = 0; i < pwLength; i++) {
        const char =
          noSpecialChar[Math.floor(Math.random() * noSpecialChar.length)];
        if (lowerChar && upperChar) {
          newPassword += char;
        } else if (upperChar) {
          newPassword += char.toUpperCase();
        } else {
          newPassword += char.toLowerCase();
        }
      }
    }
    // !::::::: IF USER DON'T WANT SPECIAL CHAR AND NUMBERS ::::::
  } else {
    for (let i = 0; i < pwLength; i++) {
      const char = charsOnly[Math.floor(Math.random() * charsOnly.length)];
      if (lowerChar || upperChar) {
        if (lowerChar) {
          newPassword += char.toLowerCase();
        } else if (upperChar) {
          newPassword += char.toUpperCase();
        } else {
          newPassword += char;
        }
      }
    }
  }

  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
