console.log("JS Connected");

function validateName(id, errorId)
{
    let Name = document.getElementById(id).value.trim();
    let Error = document.getElementById(errorId);
    if(Name.length < 2)
    {
        Error.innerHTML = "* Please enter the patient name";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validateNumber(id, errorId, label, min, max)
{
    let Value = document.getElementById(id).value;
    let NumberValue = Number(Value);
    let Error = document.getElementById(errorId);
    if(Value==="" || !Number.isInteger(NumberValue) || NumberValue < min || NumberValue > max)
    {
        Error.innerHTML = label + " must be between " + min + " and " + max;
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validateEmail(id, errorId)
{
    let Email = document.getElementById(id).value.trim();
    let Error = document.getElementById(errorId);
    let RegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!RegularExpression.test(Email))
    {
        Error.innerHTML = "* Please enter a valid email";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validateRadio(name, errorId, label)
{
    let Options = document.querySelectorAll('input[name="' + name + '"]');
    let Selected = false;
    for(let i=0; i<Options.length; i++)
    {
        if(Options[i].checked)
        {
            Selected = true;
        }
    }
    if(!Selected)
    {
        document.getElementById(errorId).innerHTML = "* Please select " + label;
        return false;
    }
    else
    {
        document.getElementById(errorId).innerHTML = "";
        return true;
    }
}

function validateSelect(id, errorId, label)
{
    let Value = document.getElementById(id).value;
    if(Value==="")
    {
        document.getElementById(errorId).innerHTML = "* Please select " + label;
        return false;
    }
    else
    {
        document.getElementById(errorId).innerHTML = "";
        return true;
    }
}

function safeText(text)
{
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function showResult(success, message)
{
    let Result = document.getElementById("PatientMsg");
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

function validatePatientForm()
{
    let validName = validateName("PatientName", "NameError");
    let validAge = validateNumber("PatientAge", "AgeError", "Age", 0, 120);
    let validEmail = validateEmail("PatientEmail", "EmailError");
    let validGender = validateRadio("Gender", "GenderError", "a gender");
    let validDepartment = validateSelect("PatientDept", "DeptError", "a department");
    let isValid = validName && validAge && validEmail && validGender && validDepartment;

    if(isValid)
    {
        let Name = safeText(document.getElementById("PatientName").value.trim());
        showResult(true, "Patient " + Name + " passed all validation checks.");
    }
    else
    {
        showResult(false, "");
    }
    return false;
}

function resetPatientForm()
{
    let Errors = document.querySelectorAll(".error");
    for(let i=0; i<Errors.length; i++)
    {
        Errors[i].innerHTML = "";
    }
    document.getElementById("PatientMsg").innerHTML = "";
}

