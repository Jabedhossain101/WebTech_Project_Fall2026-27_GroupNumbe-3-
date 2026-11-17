
function showPatients()
{
    displayPatients(PatientList);
}

function displayPatients(list)
{
    let table = "";

    for(let i = 0; i < list.length; i++)
    {
        table = table + "<tr>";
        table = table + "<td>" + list[i].patientID + "</td>";
        table = table + "<td>" + list[i].patientName + "</td>";
        table = table + "<td>" + list[i].age + "</td>";
        table = table + "<td>" + list[i].gender + "</td>";
        table = table + "<td>" + list[i].phone + "</td>";

        let id = list[i].patientID;

        table = table + "<td><button class=\"action-btn view-btn\" onclick=\"viewPatient('" + id + "')\">View</button></td>";

        table = table + "</tr>";
    }

    document.getElementById("patientTable").innerHTML = table;
}

function searchPatients()
{
    let searchValue = document.getElementById("patientSearch").value.toLowerCase();
    let searchList = [];

    for(let i = 0; i < PatientList.length; i++)
    {
        let name = PatientList[i].patientName.toLowerCase();
        let id = PatientList[i].patientID.toLowerCase();

        if(name.indexOf(searchValue) != -1 || id.indexOf(searchValue) != -1)
        {
            searchList.push(PatientList[i]);
        }
    }

    displayPatients(searchList);
}


// Show selected patient information
function viewPatient(patientID)
{
    for(let i = 0; i < PatientList.length; i++)
    {
        if(PatientList[i].patientID == patientID)
        {
            let details = "";

            details = details + "<b>Patient Details</b><br>";
            details = details + "Patient ID: " + PatientList[i].patientID + "<br>";
            details = details + "Name: " + PatientList[i].patientName + "<br>";
            details = details + "Age: " + PatientList[i].age + "<br>";
            details = details + "Gender: " + PatientList[i].gender + "<br>";
            details = details + "Phone: " + PatientList[i].phone;

            document.getElementById("patientDetails").innerHTML = details;
        }
    }
}


// Run when the page opens
showPatients();
