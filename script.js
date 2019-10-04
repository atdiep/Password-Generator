//User will click on "Generate a Password" and initiate following criteria:

//Confirm user if they want special characters. (Strings or arrays)

//Confirm user if they want numbers (0-9).

//Confirm user if they want Lowercase characters.

//Confirm user if they want Uppercase characters.

//If user picks 'No' for all, alert the user to confirm at least 1 criteria.

//Bind all inputs

//Create a function that randomly pick one of the following chosen criteria.

//Make a loop that runs until 10 characters are given.

var generateEl = document.querySelector("#generate");

var num = prompt("How many characters do you want to have? Pick between 8-128.")
var confirmSpecial = confirm("Do you want to include special characters?");
var confirmNumbers = confirm("Do you want to include numberic characters?");
var confirmUpper = confirm("Do you want to include uppercase characters?");
var confirmLower = confirm("Do you want to include lowercase ");
if (confirmSpecial === false && confirmNumbers === false && confirmUpper === false && confirmLower === false) {
    alert("Please choose at least one criteria.")
}

function generate(num) {
    console.log("Generate call");
    var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    var numbers = "0123456789";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var all = "";
    if (confirmSpecial) {
        all = all + special;
    }
    if (confirmNumbers) {
        all = all + numbers;
    }
    if (confirmUpper) {
        all = all + upper;
    }
    if (confirmLower) {
        all = all + lower;
    }
    var password = "";
    for (i = 0; i <= num; i++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
    console.log(password);
    var passwordEL = document.querySelector("#password");
    passwordEL.innerHTML = password
    return password;
}



