console.log("JS Connected");

let attemptsLeft = 3;

function lockLoginButton()
{
    let button = document.getElementById("submit");
    let secondsLeft = 30;

    button.disabled = true;
    document.getElementById("AttemptText").innerHTML = "Too many attempts. Try again in " + secondsLeft + " seconds.";

    let timer = setInterval(function ()
    {
        secondsLeft--;
        if(secondsLeft > 0)
        {
            document.getElementById("AttemptText").innerHTML = "Too many attempts. Try again in " + secondsLeft + " seconds.";
        }
        else
        {
            clearInterval(timer);
            button.disabled = false;
            attemptsLeft = 3;
            document.getElementById("AttemptText").innerHTML = "You have 3 attempts.";
        }
    }, 1000);
}

function validateLoginEmail()
{
    let Email = document.getElementById("LoginEmail").value.trim();
    let RegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!RegularExpression.test(Email))
    {
        document.getElementById("EmailError").innerHTML = "* Please enter a valid email";
        return false;
    }
    else
    {
        document.getElementById("EmailError").innerHTML = "";
        return true;
    }
}

function validateLoginPassword()
{
    let Password = document.getElementById("LoginPass").value;
    if(Password==="")
    {
        document.getElementById("PassError").innerHTML = "* Please enter the password";
        return false;
    }
    else
    {
        document.getElementById("PassError").innerHTML = "";
        return true;
    }
}

function showResult(success, message)
{
    let Result = document.getElementById("LoginError");
    if(success)
    {
        Result.className = "success";
        Result.innerHTML = message;
    }
    else
    {
        Result.className = "error";
        Result.innerHTML = "Please correct the errors above.";
    }
}

function validateLoginForm()
{
    let validEmail = validateLoginEmail();
    let validPassword = validateLoginPassword();
    let isValid = validEmail && validPassword;

    if(isValid)
    {
        let Email = document.getElementById("LoginEmail").value.trim().toLowerCase();
        showResult(true, "Login details for " + Email + " are valid.");
        attemptsLeft = 3;
        document.getElementById("AttemptText").innerHTML = "You have 3 attempts.";
        window.location.href = "nurse-patients.html";
    }
    else
    {
        showResult(false, "");
        attemptsLeft--;
        if(attemptsLeft===0)
        {
            lockLoginButton();
        }
        else
        {
            document.getElementById("AttemptText").innerHTML = "Attempts left: " + attemptsLeft;
        }
    }
    return false;
}
