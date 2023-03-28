// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  const passwordChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?";
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

  if (specialChar && numChar && lowerChar && upperChar) {
    for (let i = 0; i < pwLength; i++) {
      newPassword +=
        passwordChars[Math.floor(Math.random() * passwordChars.length)];
    }
  } else if (specialChar && numChar && lowerChar) {
    for (let i = 0; i < pwLength; i++) {
      newPassword +=
        passwordChars[
          Math.floor(Math.random() * passwordChars.length)
        ].toLowerCase();
    }
  } else if (specialChar && numChar) {
        for (let i = 0; i < pwLength; i++) {
          newPassword +=
            passwordChars[
              Math.floor(Math.random() * passwordChars.length)
            ].toLowerCase();
        }
  }

  console.log(
    `pl: ${pwLength}, xc: ${specialChar}, nc: ${numChar}, lc: ${lowerChar}, uc: ${upperChar}`
  );

  return newPassword;

  // return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
