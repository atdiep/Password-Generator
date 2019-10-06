//User will click on "Generate a Password" and initiate following criteria:

var generateEl = document.querySelector("#generate");

getInRange();

var num;
var confirmSpecial;
var confirmNumbers;
var confirmUpper;
var confirmLower;

function getInRange() {
    num = prompt("How many characters do you want to have? Pick between 8-128.");
    if (parseInt(num) < 8 || parseInt(num) > 128) {
        alert("Please choose a number between 8-128!");
        return getInRange();

    } else {
        confirmSpecial = confirm("Do you want to include special characters?");
        confirmNumbers = confirm("Do you want to include numberic characters?");
        confirmUpper = confirm("Do you want to include uppercase characters?");
        confirmLower = confirm("Do you want to include lowercase characters?");
    }
}

//If user picks 'No' for all, alert the user to confirm at least 1 criteria.

if (confirmSpecial === false && confirmNumbers === false && confirmUpper === false && confirmLower === false) {
    alert("Please choose at least one criteria.");
    getInRange();
}

//Create a function that randomly pick one of the following chosen criteria.

function generate(num) {
    var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    var numbers = "0123456789";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";

    //Bind all inputs

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

    //Make a loop that runs until 'num' characters are given.

    var password = "";
    for (i = 0; i < num; i++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
    console.log(password);
    var passwordEL = document.querySelector("#password");
    passwordEL.innerHTML = password;
    return password;
}

var copyEL = document.querySelector("#copy");
function copy() {
    document.getElementById("password").select();
    document.execCommand("copy");
}

