// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz' ,
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ,
    numeric: '1234567890' ,
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~' ,
  };
  return null;
}

function passGen(length){
  var pass = '';
  var chars=''
  if (upper = true){
    chars += uppercase;
  }
  if (lower = true){
    chars += lowercase;
  }
  if (numeric = true){
    chars += numeric
  }
  if (special = true){
    chars += special;
  }
  for (let i = 0; i < length; i++){
    pass[i] = chars.charAt(Math.random()* Math.random())
  }
  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var length = Number(prompt("Enter a password length between 8 and 20")),
  charType = prompt("Enter a character type: special, numeric, uppercase, lowercase."),
  password = writePassword();
