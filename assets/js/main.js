var password=document.getElementById("password");
var generateBtn = document.querySelector("#generate");

function makePassword() {
    var passwordlength = prompt("How long would you like your password to be? (Enter number from 8 and 128)");
    while (passwordlength < 8 || passwordlength > 128) {
        passwordlength = prompt("Please enter a value between 8 and 128.");
    }
    var includelowercase = confirm("Do you want lowercase characters in your password?");
    var includeuppercase = confirm("Do you want any uppercase characters in your password?");
    var includenumbers = confirm("Do you want any numbers in your password?");
    var includespecial = confirm("Do you want any special characters (!,$,*,&,?,etc.) in your password?");

    while (!includelowercase && !includeuppercase && !includenumbers && !includespecial) {
        alert("Select at least one character type to include.");
        var includelowercase = confirm("Do you want any lowercase characters in your password?");
        var includeuppercase = confirm("Do you want any uppercase charactersin your password?");
        var includenumbers = confirm("Do you want any numbers in your password?");
        var includespecial = confirm("Do you want any special characters (!,$,*,&,?,etc.) in your password?");
    }

  var password = genaratePassword(passwordlength, includelowercase, includeuppercase, includenumbers, includespecial);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






function genaratePassword(length, lowercase, uppercase, numbers,special) {


    var characters = "";
    var password = "";

    if (lowercase) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers) {
        characters += "0123456789";
    }
    if (special) {
        characters += "~`! @#$%^&*()_-+={[}]|:;'<,>.?/";
    }

    for (var x = 0; x < length; x++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

generateBtn.addEventListener("click",makePassword)
