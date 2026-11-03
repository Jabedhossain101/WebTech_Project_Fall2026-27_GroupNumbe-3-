
function collect_data()
{
    let Email = validateEmail();
    let Password = validatePassword();

    if(Email && Password)
    {
        window.location.href = "dashboard.html";
    }

    return false;
}

function validateEmail()
{
    let Email = document.getElementById("PatientEmail").value.trim();
    let Error = document.getElementById("EmailError");

    
    let RegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let PhoneExpression = /^01[3-9]\d{8}$/;

    if(Email == "")
    {
        Error.innerHTML = "* Please!! Enter the Email or Phone Number";
        return false;
    }
    else if(Email.includes("@") && !RegularExpression.test(Email))
    {
        Error.innerHTML = "Please Enter The Email in the Exact Format";
        return false;
    }
    else if(!Email.includes("@") && !PhoneExpression.test(Email))
    {
        Error.innerHTML = "Please Enter a Valid Phone Number";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validatePassword()
{
    let Password = document.getElementById("Password").value;
    let Error = document.getElementById("PasswordError");

    if(Password == "")
    {
        Error.innerHTML = "* Please!! Enter the Password";
        return false;
    }
    else if(Password.length < 6)
    {
        Error.innerHTML = "Password Must Carry At Least 6 Characters";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}
