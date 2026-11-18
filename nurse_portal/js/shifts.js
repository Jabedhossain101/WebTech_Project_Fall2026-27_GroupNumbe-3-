console.log("JS Connected");

function validateShiftDate()
{
    let DateValue = document.getElementById("ShiftDate").value;
    if(DateValue==="")
    {
        document.getElementById("DateError").innerHTML = "* Please select the shift date";
        return false;
    }
    else
    {
        document.getElementById("DateError").innerHTML = "";
        return true;
    }
}

function validateShiftRadio()
{
    let Options = document.querySelectorAll('input[name="ShiftType"]');
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
        document.getElementById("ShiftError").innerHTML = "* Please select a shift";
        return false;
    }
    else
    {
        document.getElementById("ShiftError").innerHTML = "";
        return true;
    }
}

function validateShiftWard()
{
    let Ward = document.getElementById("ShiftWard").value;
    if(Ward==="")
    {
        document.getElementById("WardError").innerHTML = "* Please select a ward";
        return false;
    }
    else
    {
        document.getElementById("WardError").innerHTML = "";
        return true;
    }
}

function safeText(text)
{
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function showResult(success, message)
{
    let Result = document.getElementById("ShiftMsg");
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

function validateShiftForm()
{
    let validDate = validateShiftDate();
    let validShift = validateShiftRadio();
    let validWard = validateShiftWard();
    let isValid = validDate && validShift && validWard;

    if(isValid)
    {
        let Shift = document.querySelector('input[name="ShiftType"]:checked');
        let Ward = safeText(document.getElementById("ShiftWard").value);
        showResult(true, Shift.value + " shift in the " + Ward + " ward passed validation.");
    }
    else
    {
        showResult(false, "");
    }
    return false;
}

function resetShiftForm()
{
    let Errors = document.querySelectorAll(".error");
    for(let i=0; i<Errors.length; i++)
    {
        Errors[i].innerHTML = "";
    }
    document.getElementById("ShiftMsg").innerHTML = "";
}

