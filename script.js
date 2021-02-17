// // Assigned variables

var uppercase = "ABDCEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = uppercase.toLowerCase();
var special = "!@#$%^&*?-";
var numbers = "1234567890";
var chooseChar = [];
// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//generate password function gets called in writePassword function, and it should return the final password
function generatePassword() {
  //randomly generates and return the final password to the end
  var result = "";
  //the prompt ask the user how many characters they want
  var length = prompt("How many characters in your random password? (between 8 and 128)");
  if (isNaN(length)) {
    alert("You must input a number!");
    return generatePassword()
  }
  if (length < 8 || length > 128) {
    alert("Please choose numbers between 8 - 128!");
    return generatePassword()
  }

  //ask the user if they want to include upper, lower, num, special?
  var includeUpper = confirm("Do you want to include uppercase letters?");
  var includeLower = confirm("Do you want to include lowercase letters?");
  var includeSpecial = confirm("Do you want to include special characters?");
  var includeNumbers = confirm("Do you want to include numbers?");

  if (!includeUpper && !includeLower && !includeNumbers && !includeSpecial) {
    alert("You must at least choose 1 type of character!");
    return generatePassword()
  }
  
  if (includeUpper) {
    chooseChar.push(uppercase);
  }
  if (includeLower) {
    chooseChar.push(lowercase);
  }

  if (includeNumbers) {
    chooseChar.push(numbers);
  }

  if (includeSpecial) {
    chooseChar.push(special);
  }
  console.log(chooseChar)
//loops randoms numbers and special characters
  for (var i = 0; i < length; i++) {
    var choosenString = chooseChar[Math.floor(Math.random() * chooseChar.length)];
    result += choosenString[Math.floor(Math.random() * choosenString.length)]
  }
  return result;

}







