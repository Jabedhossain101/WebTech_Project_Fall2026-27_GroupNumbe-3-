console.log("JS Connected");

function validateNurseName()
{
    let Name = document.getElementById("NurseName").value.trim();
    if(Name.length < 3)
    {
        document.getElementById("NameError").innerHTML = "* Name must have at least 3 characters";
        return false;
    }
    else
    {
        document.getElementById("NameError").innerHTML = "";
        return true;
    }
}

function validateNurseId()
{
    let NurseId = document.getElementById("NurseId").value.trim();
    if(NurseId.length < 4)
    {
        document.getElementById("NurseIdError").innerHTML = "* Nurse ID must have at least 4 characters";
        return false;
    }
    else
    {
        document.getElementById("NurseIdError").innerHTML = "";
        return true;
    }
}

function validateNurseEmail()
{
    let Email = document.getElementById("NurseEmail").value.trim();
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

function validateNursePassword()
{
    let Password = document.getElementById("NursePass").value;
    if(Password.length < 6)
    {
        document.getElementById("PassError").innerHTML = "* Password must have at least 6 characters";
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
    let Result = document.getElementById("RegisterMsg");
    if(success)
    {
        Result.className = "success";
        Result.innerHTML = message;
    }
    else
    {
        Result.className = "error";
        Result.innerHTML = "Please input all required fields.";
    }
}

function validateRegistrationForm()
{
    let validName = validateNurseName();
    let validId = validateNurseId();
    let validEmail = validateNurseEmail();
    let validPassword = validateNursePassword();
    let isValid = validName && validId && validEmail && validPassword;

    if(isValid)
    {
        showResult(true, "Nurse registration information passed validation.");
    }
    else
    {
        showResult(false, "");
    }
    return false;
}
