//User will click on "Generate a Password" and initiate following criteria:

//Confirm user if they want special characters. (Strings or arrays)

//Confirm user if they want numbers (0-9).

//Confirm user if they want Lowercase characters.

//Confirm user if they want Uppercase characters.

//If user picks 'No' for all, alert the user to confirm at least 1 criteria.

//Bind all inputs

//Create a function that randomly pick one of the following chosen input.

//Make a loop that runs until 10 characters are given.

var confirmSpecial = confirm("Do you want to include special characters?");
var confirmNumbers = confirm("Do you want to include numbers?");
var confirmUpper = confirm("Do you want to include uppercase characters?");
var confirmLower = confirm("Do you want to include lowercase ");

funtion generate(length = 10) {
    var special = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var numbers = "0123456789";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var all = special + numbers + upper + lower;
    var password = "";
    for (i = 0; o < length; i++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
    return password;
}
