
function collect_data()
{
    let Name = validName();
    let ID = validID();
    let Age = validAge();
    let Doctor = validDoctor();
    let Dept = validDept();
    let Time = validTime();
    let Reason = validReason();
    let BloodGroup = validBloodGroup();
    let AppointmentDate= validAppointmentDate();

    if(Name && ID && Doctor && Dept && Date && Time && Reason&& BloodGroup&& Age&& AppointmentTime&&AppointmentDate)
    {
        let Message = document.getElementById("Message");

        Message.style.color = "green";
        Message.innerHTML = "Appointment Booked Successfully!";
    }
    else
    {
        document.getElementById("Message").innerHTML = "";
    }

    return false;
}


// Validate Patient Name
function validName()
{
    let Name = document.getElementById("PatientName").value;
    let Error = document.getElementById("NameError");

    if(Name == "")
    {
        Error.innerHTML = "*Please Enter Your Name";
        return false;
    }
    else if(Name.length < 6)
    {
        Error.innerHTML = "Name Must Carry At Least 6 Characters";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


// Validate Patient ID
function validID()
{
    let ID = document.getElementById("PatientID").value;
    let Error = document.getElementById("IdError");

    if(ID == "")
    {
        Error.innerHTML = "*Please Enter Your Patient ID";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
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


// Validate Doctor
function validDoctor()
{
    let Doctor = document.getElementById("Doctor").value;
    let Error = document.getElementById("DoctorError");

    if(Doctor == "")
    {
        Error.innerHTML = "Please Select a Doctor";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validBloodGroup(){
       let BloodGroup = document.getElementById("BloodGroup").value;
    let Error = document.getElementById("BloodError");

    if(BloodGroup == "")
    {
        Error.innerHTML = "*Please Select a BloodGroup";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }

}
function validAppointmentDate(){
       let AppointmentDate= document.getElementById("AppointmentDate").value;
    let Error = document.getElementById("DateError");

    if(AppointmentDate == "")
    {
        Error.innerHTML = "*Please Select a AppointmentDate";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }

}
// Validate Department
function validDept()
{
    let Dept = document.getElementById("Department").value;
    let Error = document.getElementById("DepartmentError");

    if(Dept == "")
    {
        Error.innerHTML = "*Please Select a Department";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}



// Validate Appointment Time
function validTime()
{
    let Time = document.getElementById("AppointmentTime").value;
    let Error = document.getElementById("TimeError");

    if(Time == "")
    {
        Error.innerHTML = "*Please Select Appointment Time";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


// Validate Appointment Reason
function validReason()
{
    let Reason = document.getElementById("Reason").value;
    let Error = document.getElementById("ReasonError");

    if(Reason == "")
    {
        Error.innerHTML = "*Please Enter Your Reason";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


// Clear messages when Reset is clicked
function clearMessage()
{
    document.getElementById("NameError").innerHTML = "";
    document.getElementById("IdError").innerHTML = "";
    document.getElementById("DoctorError").innerHTML = "";
    document.getElementById("DepartmentError").innerHTML = "";
    document.getElementById("DateError").innerHTML = "";
    document.getElementById("TimeError").innerHTML = "";
    document.getElementById("ReasonError").innerHTML = "";
    document.getElementById("Message").innerHTML = "";
}
