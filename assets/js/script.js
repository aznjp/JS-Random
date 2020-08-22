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
    uppercaseAdd = confirm("Uppercase letters?");
    // debugger;
    return uppercaseAdd;
}

//Function for numbers to be added into final pool
function Numbers() {
    numberAdd = confirm("Do you want to include numbers in your password? \n(Yes or No)");
    // debugger;
    return numberAdd;
}

//Function for special letters to be added into final pool
function Special() {
    specialAdd = confirm("Do you want to include special characters in your password? \n(Yes or No)");
    // debugger;
    return specialAdd;
}

//Specifies that the character pool will automatically add in the lowercase 
//Puts those directly into the new array for password in empty air quotes
var characters = lowercase;
var password = "";

//Specifies the pool of the characters you want to added into the pool of characters via boolean values
//Note we did specify the lowercase values will always be inputted in
if (uppercaseAdd && numberAdd && specialAdd) {
    characters += uppercase + number + special;

} else if (uppercaseAdd && numberAdd) {
    characters += uppercase + number;

} else if (numberAdd && specialAdd) {
    characters += number + special;

} else if (uppercaseAdd && specialAdd) {
    characters += uppercase + special;

} else if (uppercaseAdd) {
    characters += uppercase;

} else if (numberAdd) {
    characters += number;

} else if (specialAdd) {
    characters += special;

} else {
    characters === lowercase;
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

    //Uses for loop to go through the value that was inputted in passwordLength function and then adds a new character as they are randomly pulled out from the character pool
    for (var i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

// Write password to the #password input
function writePassword() {

    var password = "";
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);