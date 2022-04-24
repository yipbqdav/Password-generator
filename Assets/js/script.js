// Assignment Code

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

// main function that generates the password
function writePassword(length, charTypes) {
  var passwordText = document.querySelector("#password");
  var types = charTypes.split(", ");
  console.log(password, length, charTypes, types);
  var optionalChars = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz' ,
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ,
    numeric: '1234567890' ,
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~' ,
  };
  var pass = '';
  var charSets='';
  if (types.includes("uppercase")){
    charSets += optionalChars.uppercase;
  }
  if (types.includes("lowercase")){
    charSets += optionalChars.lowercase;
  }
  if (types.includes("numeric")){
    charSets += optionalChars.numeric
  }
  if (types.includes("special")){
    charSets += optionalChars.special;
  }
  // randomizer given certain parameters
  for (let i = 0; i < length; i++){
    // line runs through loop "length" amount of times, adding a random character from charSets to the password
    pass += charSets.charAt(Math.floor(Math.random() * charSets.length));
  }
  console.log(pass);
  console.log(passwordText);
  passwordText.innerHTML = pass;
}
// ensures that the prompts don't show up after refreshing the page
function generatePassword() {
  var length = Number(prompt("Enter a password length between 8 and 128"));
  while (length < 8 || length > 128)
    length = Number(prompt("Enter a password length between 8 and 128"));
  var charTypes = prompt("Enter a character type: special, numeric, uppercase, lowercase.");
  writePassword(length, charTypes);
}


/*
var length = Number(prompt("Enter a password length between 8 and 20"));
var charTypes = prompt("Enter a character type: special, numeric, uppercase, lowercase.");
writePassword();
*/
