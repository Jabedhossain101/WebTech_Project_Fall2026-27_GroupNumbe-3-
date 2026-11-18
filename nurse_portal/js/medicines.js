console.log("JS Connected");

function validateMedicineText(id, errorId, label)
{
    let Value = document.getElementById(id).value.trim();
    let Error = document.getElementById(errorId);
    if(Value==="")
    {
        Error.innerHTML = "* Please enter " + label;
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validateMedicineSelect(id, errorId, label)
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
    let Result = document.getElementById("MedicineMsg");
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

function validateMedicineForm()
{
    let validPatient = validateMedicineText("MedicinePatient", "PatientError", "the patient name");
    let validMedicine = validateMedicineText("MedicineName", "MedicineError", "the medicine name");
    let validDose = validateMedicineText("MedicineDose", "DoseError", "the dosage");
    let validFrequency = validateMedicineSelect("MedicineTime", "TimeError", "a frequency");
    let isValid = validPatient && validMedicine && validDose && validFrequency;

    if(isValid)
    {
        let Patient = safeText(document.getElementById("MedicinePatient").value.trim());
        let Medicine = safeText(document.getElementById("MedicineName").value.trim());
        showResult(true, "Medicine record for " + Patient + " (" + Medicine + ") passed validation.");
    }
    else
    {
        showResult(false, "");
    }
    return false;
}

function resetMedicineForm()
{
    let Errors = document.querySelectorAll(".error");
    for(let i=0; i<Errors.length; i++)
    {
        Errors[i].innerHTML = "";
    }
    document.getElementById("MedicineMsg").innerHTML = "";
}

