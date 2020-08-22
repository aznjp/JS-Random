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
    passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters)");

    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Password length must be an integer value between 8-128 characters");
        Length();
    } else {
        alert("You will be asked specifications on which character sets you wish to include into your generated password");
    }
    // debugger;
    return passwordLength;
}

//Function for uppercase letters to be added into final pool
function Lowercase() {
    lowercaseAdd = confirm("Lowercase letters?");
    // debugger;
    return lowercaseAdd;
}

//Function for uppercase letters to be added into final pool
function Uppercase() {
    uppercaseAdd = confirm("Uppercase letters?");
    // debugger;
    return uppercaseAdd;
}

//Function for numbers to be added into final pool
function Numbers() {
    numberAdd = confirm("Numbers?");
    // debugger;
    return numberAdd;
}

//Function for special letters to be added into final pool
function Special() {
    specialAdd = confirm("Special Characters?");
    // debugger;
    return specialAdd;
}


//Function used to generate password after boolean logic is applied to each and the password length is specified
function generatePassword() {
    //Used to place in function for determining the length and chracter specifications  
    //Console log is used to check if actual value was submitted (Chracters values will be a boolean to determine true or false)
    Length();
    // console.log(passwordLength);
    Lowercase();
    // console.log(lowercaseAdd);
    Uppercase();
    // console.log(uppercaseAdd);
    Numbers();
    // console.log(numberAdd);
    Special();
    // console.log(specialAdd);

    // The empty string for character is filled with charcters once the function is considered true other wise the condition will not be fulfilled 
    // thus they wont be added in
    var characters = ""

    // Once the function has been fulfilled in the for loop down below it will return the password string down below which needs to be 
    //clarified in the var password function
    var password = ""

    //While loop is used to clarify a specification if all character sets were false then an alert would occur and then restart the function
    while (!uppercaseAdd && !lowercaseAdd && !numberAdd && !specialAdd) {
        alert("You need to pick at least one character set to continue");
        generatePassword();
    }

    //Specifies the pool of the characters you want to added into the pool of characters via boolean values
    //Note we did specify the lowercase values will always be inputted in
    if (uppercaseAdd) {
        characters += uppercase
        console.log(characters)
    }
    if (lowercaseAdd) {
        characters += lowercase
        console.log(characters)
    }
    if (numberAdd) {
        characters += number
        console.log(characters)
    }
    if (specialAdd) {
        characters += special
        console.log(characters)
    }


    //Uses for loop to go through the value that was inputted in passwordLength function and then adds a new character as they are randomly pulled out from the character pool
    for (var i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
        console.log(password)
    }
    return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    console.log(password)
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);