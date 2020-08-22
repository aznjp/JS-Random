var generateBtn = document.querySelector("#generate");


var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//Function used to determine the length of the password
function determineLength() {
    passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Password length must be a number between 8-128 characters");
        determineLength();
    } else {
        alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
    }
    // debugger;
    return passwordLength;
}

//Function used to take all the input from the previous functions and generate a password using a random number generator and 
//the charAt method 
function generatePassword() {
    determineLength();
    console.log(passwordLength);

    var characters = lowercase;
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

// Write password to the #password input
function writePassword() {
    var password = "";
    password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);