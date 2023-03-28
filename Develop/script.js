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

  const charsOnly = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

  // Click OK to confirm including special characters. ✅
  const specialChar = confirm(
    "Click OK to confirm including special characters."
  );

  // Click OK to confirm including numeric characters. ✅
  const numChar = confirm("Click OK to confirm including numeric characters.");

  // Click OK to confirm including lowercase characters. ✅
  const lowerChar = confirm("Click OK to confirm including lower characters.");

  // Click OK to confirm including uppercase characters. ✅
  const upperChar = confirm("Click OK to confirm including upper characters.");

  if (specialChar || numChar) {
    if (specialChar) {
      for (let i = 0; i < pwLength; i++) {
        const char = noNumbers[Math.floor(Math.random() * noNumbers.length)];
        if (lowerChar) {
          newPassword += char.toLowerCase();
        } else if (upperChar) {
          newPassword += char.toUpperCase();
        } else {
          newPassword += char;
        }
      }
    } else if (numChar) {
      for (let i = 0; i < pwLength; i++) {
        const char =
          noSpecialChar[Math.floor(Math.random() * noSpecialChar.length)];
        if (lowerChar) {
          newPassword += char.toLowerCase();
        } else if (upperChar) {
          newPassword += char.toUpperCase();
        }
      }
    } else if (specialChar && numChar) {
      for (let i = 0; i < pwLength; i++) {
        const char =
          passwordCharsAll[Math.floor(Math.random() * passwordCharsAll.length)];
        if (lowerChar) {
          newPassword += char.toLowerCase();
        } else if (upperChar) {
          newPassword += char.toUpperCase();
        } else {
          newPassword += char;
        }
      }
    }
  } else {
      for (let i = 0; i < pwLength; i++) {
        const char =
          charsOnly[Math.floor(Math.random() * charsOnly.length)];
        if (lowerChar) {
          newPassword += char.toLowerCase();
        } else if (upperChar) {
          newPassword += char.toUpperCase();
        } else {
          newPassword += char;
        }
      }
    }

  console.log(
    `pl: ${pwLength}, xc: ${specialChar}, nc: ${numChar}, lc: ${lowerChar}, uc: ${upperChar}`
  );

  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
