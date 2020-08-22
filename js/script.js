var generateBtn = document.querySelector("#generate");

// Generated variables to pull from in each function down below
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";

// Each specification variable added as we go along
var passwordLength;
var uppercaseAdd;
var numberAdd;
var specialAdd;


//Function to determine password length
function Length() {
    //ParseInt function could have been added to remove any non integer function but I wanted to specify in the 
    //if statement to keep all conditions in the same place
    passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Password length must be an integer value between 8-128 characters");
        Length();
    } else {
        alert("You will be asked specifications on which character sets you wish to include into your generated password /n Lowercase letters will automatically be submitted");
    }
    // debugger;
    return passwordLength;
}

//Function for uppercase letters to be added into final pool
function Uppercase() {
    uppercaseCheck = confirm("Uppercase letters?");
    // debugger;
    return uppercaseAdd;
}

//Function for numbers to be added into final pool
function Numbers() {
    numberCheck = confirm("Do you want to include numbers in your password? \n(Yes or No)");
    // debugger;
    return numberAdd;
}

//Function for special letters to be added into final pool
function Special() {
    specialCheck = confirm("Do you want to include special characters in your password? \n(Yes or No)");
    // debugger;
    return specialAdd;
}

//Function used to generate password after boolean logic is applied to each and the password length is specified
function generatePassword() {
    //Used to place in function for determining the length and chracter specifications  
    //Console log is used to check if actual value was submitted (Chracters values will be a boolean to determine true or false)
    Length();
    console.log(passwordLength);
    Uppercase();
    console.log(uppercaseAdd);
    Numbers();
    console.log(numberAdd);
    Special();
    console.log(specialAdd);

}

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);