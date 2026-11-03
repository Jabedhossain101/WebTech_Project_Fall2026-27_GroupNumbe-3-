
//collect data from HTML Form
function collect_registration()
{
    let Name = validName();
    let Age = validAge();
    let Email = validateRegistrationEmail();
    let Phone = validatePhone();
    let Gender = ValidateGender();
    let Password = validateRegistrationPassword();
    let ConfirmPassword = validateConfirmPassword();
    return false;
}

function validName()
{
    let Pname = document.getElementById("PatientName").value;
    let Error = document.getElementById("NameError");

    if(Pname=="")
    {
        Error.innerHTML = "* Please!! Enter the Name Carefully";
    }
    else if(Pname.length<6)
    {
        Error.innerHTML = "Name Must Carry At least 6 Character";
    }
    else
    {
        Error.innerHTML = "Patient Name: " + Pname;
    }
    return false;
}

function validAge()
{
    let PAge = document.getElementById("PatientAge").value;
    let Error = document.getElementById("AgeError");

    if(PAge=="")
    {
        Error.innerHTML = "* Please!! Enter the Age";
    }
    else if(PAge<0 || PAge>100)
    {
        Error.innerHTML = "Age Must Be between 0-100";
    }
    else
    {
        Error.innerHTML = "Patient Age: " + PAge;
    }
    return false;
}

function validateRegistrationEmail()
{
    let Email = document.getElementById("PatientEmail").value.trim();
    let Error = document.getElementById("EmailError");
    let RegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(Email=="")
    {
        Error.innerHTML = "* Please!! Enter The Email";
    }
    else if(!RegularExpression.test(Email))
    {
        Error.innerHTML = "Please Enter The Email in the Exact Format";
    }
    else
    {
        Error.innerHTML = "Patient Email: " + Email;
    }
    return false;
}

function validatePhone()
{
    let Phone = document.getElementById("PatientPhone").value;
    let Error = document.getElementById("PhoneError");
    let RegularExpression = /^[0-9]{11}$/;

    if(Phone=="")
    {
        Error.innerHTML = "* Please!! Enter the Phone Number";
    }
    else if(!RegularExpression.test(Phone))
    {
        Error.innerHTML = "Phone Number Must Carry 11 Digits";
    }
    else
    {
        Error.innerHTML = "Patient Phone: " + Phone;
    }
    return false;
}


function ValidateGender()
{
    let genders = document.querySelectorAll('input[name="Gender"]');
    let GenderError = document.getElementById("GenderError");
    let selectGender = "";

    for(let i=0; i<genders.length; i++)
    {
        if(genders[i].checked)
        {
            selectGender = genders[i].value;
            break;
        }
    }

    if(selectGender=="")
    {
        GenderError.innerHTML = "Please Select Your Gender";
    }
    else
    {
        GenderError.innerHTML = "Patient Gender: " + selectGender;
    }
    return false;
}

function validateRegistrationPassword()
{
    let Password = document.getElementById("Password").value;
    let Error = document.getElementById("PasswordError");

    if(Password=="")
    {
        Error.innerHTML = "* Please!! Enter the Password";
    }
    else if(Password.length<6)
    {
        Error.innerHTML = "Password Must Carry At Least 6 Characters";
    }
    else
    {
        Error.innerHTML = "Password Entered Successfully";
    }
    return false;
}

function validateConfirmPassword()
{
    let Password = document.getElementById("Password").value;
    let ConfirmPassword = document.getElementById("ConfirmPassword").value;
    let Error = document.getElementById("ConfirmPasswordError");

    if(ConfirmPassword=="")
    {
        Error.innerHTML = "* Please!! Confirm Your Password";
    }
    else if(Password!=ConfirmPassword)
    {
        Error.innerHTML = "Password Does Not Match";
    }
    else
    {
        Error.innerHTML = "Password Matched";
    }
    return false;
}
