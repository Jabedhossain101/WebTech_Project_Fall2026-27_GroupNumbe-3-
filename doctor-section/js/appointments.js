
function showAppointments()
{
    displayAppointments(AppointmentList);
}

function displayAppointments(list)
{
    let table = "";

    for(let i = 0; i < list.length; i++)
    {
        table = table + "<tr>";

        table = table + "<td>" + list[i].patientID + "</td>";
        table = table + "<td>" + list[i].patientName + "</td>";
        table = table + "<td>" + list[i].date + "</td>";
        table = table + "<td>" + list[i].time + "</td>";
        table = table + "<td>" + list[i].reason + "</td>";
        table = table + "<td>" + list[i].status + "</td>";

        table = table + "<td>";

        if(list[i].status == "Pending")
        {
            let id = list[i].patientID;

            table = table + "<button class=\"action-btn confirm-btn\" onclick=\"changeStatus('" + id + "', 'Confirmed')\">Confirm</button>";

            table = table + "<button class=\"action-btn cancel-btn\" onclick=\"changeStatus('" + id + "', 'Cancelled')\">Cancel</button>";
        }
        else
        {
            table = table + "No action";
        }

        table = table + "</td>";
        table = table + "</tr>";
    }

    document.getElementById("appointmentTable").innerHTML = table;
}

function changeStatus(patientID, newStatus)
{
    for(let i = 0; i < AppointmentList.length; i++)
    {
        if(AppointmentList[i].patientID == patientID)
        {
            AppointmentList[i].status = newStatus;
        }
    }

    searchAppointments();

    document.getElementById("appointmentMessage").innerHTML = "Appointment status updated.";
}

function searchAppointments()
{
    let searchValue = document.getElementById("appointmentSearch").value.toLowerCase();
    let searchList = [];

    for(let i = 0; i < AppointmentList.length; i++)
    {
        let name = AppointmentList[i].patientName.toLowerCase();
        let id = AppointmentList[i].patientID.toLowerCase();

        if(name.indexOf(searchValue) != -1 || id.indexOf(searchValue) != -1)
        {
            searchList.push(AppointmentList[i]);
        }
    }

    displayAppointments(searchList);
}

showAppointments();
